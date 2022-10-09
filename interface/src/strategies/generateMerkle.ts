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

const generateMerkle = async (totalAmount: BigNumber, strategy: Strategy): Promise<Merkle> => {
  const shares = await strategy.computeShares();
  console.log({shares})
  const rewards = getRewards(totalAmount, shares.totalWeight, shares.shares);
  console.log({rewards})
  const nodedRewards = rewards.map((item) => ({
    ...item,
    node: MerkleTree.makeLeafNode(item.address, item.amount as any),
  }));
  console.log({nodedRewards})
  const nodes = nodedRewards.map((item) => item.node);
  const mt = new MerkleTree(nodes);
  console.log({mt})
  const claims = nodedRewards.map((nodedReward, i) => {
    console.log(i)
    return {
    ...nodedReward,
    proof: mt.getHexProof(nodedReward.node),
  }});
  console.log({claims})

  const keyedClaims = {};
  claims.forEach((claim) => {
    keyedClaims[claim.address] = { ...claim };
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
