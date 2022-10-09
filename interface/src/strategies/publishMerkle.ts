import { ipfsPublishBuffer } from "utils/ipfs-publish";
import { Merkle } from "./generateMerkle";

export interface Metadata {
  title: string;
  description: string;
  strategy: string;
}

const publishMerkle = async (merkleTree: Merkle, metadata: Metadata): Promise<string> => {
  const obj = { merkleTree, metadata };

  const contentId = await ipfsPublishBuffer("airdrop.json", new Buffer(JSON.stringify(obj)));
  return contentId;
};

export default publishMerkle;
