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
  const shares = await strategy.computeShares(...params);

  const rewards = getRewards(totalAmount, shares.totalWeight, shares.shares);
  const claims: { address: string; amount: BigNumber; node: string; proof?: string[] }[] = rewards.map((item) => ({
    ...item,
    node: MerkleTree.makeLeafNode(item.address, item.amount as any),
  }));
  const nodes = claims.map((claim) => claim.node);
  const mt = new MerkleTree(nodes);

  console.log({ mt });

  for (const claim of claims) {
    claim.proof = mt.getHexProof(claim.node);
  }

  console.log({ claims });

  const keyedClaims = {};
  claims.forEach((claim) => {
    keyedClaims[claim.address] = claim;
    delete keyedClaims[claim.address].address;
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
