import pohStrategy from './poh';
import { toBN } from "web3-utils";
import getRewards from "./getAmounts";
import { BigNumber } from "ethers";
import { MerkleTree } from "@kleros/merkle-tree";
import { ipfsPublishBuffer } from './ipfs-publish';
import fetch from "node-fetch";

const generateMerkle = async (totalAmount: BigNumber) => {
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

      console.log({
        claims,
        root: mt.getHexRoot(),
        width: mt.getWidth(),
        height: mt.getHeight(),
      });

      const rootJson = {
        claims,
        root: mt.getHexRoot(),
        width: mt.getWidth(),
        height: mt.getHeight(),
      };

    const contentId = await ipfsPublishBuffer('airdrop.json', new Buffer(JSON.stringify(rootJson)));
      console.log(contentId);
    return {
      merkleTree: {
        claims,
        root: mt.getHexRoot(),
        width: mt.getWidth(),
        height: mt.getHeight(),
      }
    };
}
generateMerkle(BigNumber.from(1_000_000));
//console.log(makeLeafNode('0x209469C921db9d5Bd77084370e80B63d5cdD63C1',1));
