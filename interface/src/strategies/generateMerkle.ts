import getRewards from "./getRewards";
import { BigNumber } from "ethers";
import { MerkleTree } from "@kleros/merkle-tree";
import { Strategy } from "types";

export interface Merkle {
  claims: {
    [address: string]: {
      proof: string[];
      node: string;
      address: string;
      amount: BigNumber;
    };
  };
  root: string;
  width: number;
  height: number;
}

const generateMerkle = async (totalAmount: BigNumber, strategy: Strategy, params: any[]): Promise<Merkle> => {
  console.log("Generating shares...");
  const shares = await strategy.computeShares(...params);
  console.log("Got", Object.keys(shares.shares).length, "shares.")
  console.log("Generating rewards...")
  const rewards = getRewards(totalAmount, shares.totalWeight, shares.shares);
  console.log("Done generating rewards.")
  console.log("Generating leaves...")
  const claims: { address: string; amount: BigNumber; node: string; proof?: string[] }[] = rewards.map((item) => ({
    ...item,
    node: MerkleTree.makeLeafNode({ type: "address", value: item.address }, item.amount as any),
  }));
  const nodes = claims.map((claim) => claim.node);
  console.log("Done generating leaves.")

  const mt = new MerkleTree(nodes);

  console.log("Generating proofs. This process can take a while...")
  for (let i = 0; i < claims.length; i++) {
    if (i % 37 === 0) console.log(`${Math.floor(i / claims.length * 1000)/10}%`, "Proof", i, "of", claims.length);
    const claim = claims[i];
    claim.proof = mt.getHexProof(claim.node);
  }

  const keyedClaims = {};
  claims.forEach((claim) => {
    keyedClaims[claim.address.toLowerCase()] = claim;
    delete keyedClaims[claim.address.toLowerCase()].address;
  });

  const merkleTree = {
    claims: keyedClaims,
    root: mt.getHexRoot(),
    width: mt.getWidth(),
    height: mt.getHeight(),
  };

  return merkleTree;
};

export default generateMerkle;
