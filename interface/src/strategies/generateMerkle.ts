import pohStrategy from './poh';
import getRewards from "./getRewards";
import { BigNumber } from "ethers";
import { MerkleTree } from "@kleros/merkle-tree";

export interface Merkle {
  claims: {
    proof: string[];
    node: string;
    address: string;
    amount: BigNumber;
  }[];
  root: string;
  width: number;
  height: number;

}

const generateMerkle = async (totalAmount: BigNumber): Promise<Merkle> => {
    const shares = await pohStrategy.computeShares();

    const rewards = getRewards(totalAmount,shares.totalWeight, shares.shares);
    const nodedRewards = rewards.map(item => ({ ...item,
      node: MerkleTree.makeLeafNode(item.address,item.amount as any)
        
    }))
    const nodes = nodedRewards.map(item => item.node)
    console.log(rewards[0].address);
    console.log(rewards[0].amount);
    console.log(nodes[0]);
    const mt = new MerkleTree(nodes);

    const claims = nodedRewards.map(
      (nodedReward) => ({
        ...nodedReward,
        proof: mt.getHexProof(nodedReward.node),
      }),
    );

    const merkleTree = {
      claims,
      root: mt.getHexRoot(),
      width: mt.getWidth(),
      height: mt.getHeight(),
    };

    return (merkleTree);
}

export default generateMerkle