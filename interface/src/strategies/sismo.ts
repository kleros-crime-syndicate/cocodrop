import request from "graphql-request";
import { Strategy } from "types";
import { BigNumber } from "ethers";

const getBatch = async (first: number, skip: number, tokenId: number): Promise<string[]> => {
  const query = `{
    sbadges(first: ${first}, skip: ${skip}, where: {tokenId: ${tokenId}} ){
      mintedTo
    }
  }`;
  const result = await request(
    "https://api.thegraph.com/subgraphs/name/shotaronowhere/sismo",
    query
  );
  return result.sbadges.map((submission: any) => submission.mintedTo);
};

const getAllSBadges = async (tokenId: number): Promise<string[]> => {
  const batches = [];
  let skip = 0;
  while (true) {
    const humans = await getBatch(1000, skip, tokenId);
    batches.push(humans);
    if (humans.length < 1000) break;
    skip += 1000;
  }
  return batches.flat(1);
};

const sismoCompute = async (...args: string[]) => {
  const sbadges = await getAllSBadges(Number(args[0]));
  const weightedSBadges = sbadges.reduce((acc, human) => ({ ...acc, [human]: 1 }), {} as Record<string, number>);
  return {
    totalWeight: sbadges.length,
    shares: weightedSBadges,
  };
};

const getDisplayName = async (...args: string[]) => {
  const tokenIdHex: string = BigNumber.from(args[0]).toHexString().substring(2);
  const paddedTokenId: string = "0".repeat(64-tokenIdHex.length)+tokenIdHex;
  const query = `https://hub.sismo.io/badges/polygon/${paddedTokenId}.json`;
  const result = await fetch(query);
  const resultJSON =  await result.json();
  return "Sismo Badge holders of " + resultJSON.name;
}

const sismoStrategy: Strategy = {
  name: "Sismo",
  description: "Every sismo badge gets an equal share",
  logoUri: "https://sismo-prod-hub-static.s3.eu-west-1.amazonaws.com/badges/sismo_early_users.svg",
  parameters: [],
  computeShares: sismoCompute,
  getDisplayName,
};

export default sismoStrategy;
