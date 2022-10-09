import request, { gql } from "graphql-request";
import { Strategy } from "types";

async function poapCompute(eventId: number) {
  const chunkSize = 1000;
  const fetchedData: { [address: string]: number } = {};
  let currentChunkIndex = 0;
  let currentChunkTokensOwners;

  do {
    currentChunkTokensOwners = await request(
      "https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai",
      gql`
        query GetEventTokensOwners($eventId: ID!, $tokensChunkSize: Int!, $tokensSkip: Int!) {
          event(id: $eventId) {
            tokens(first: $tokensChunkSize, skip: $tokensSkip) {
              owner {
                id
              }
            }
          }
        }
      `,
      { eventId, tokensChunkSize: chunkSize, tokensSkip: chunkSize * currentChunkIndex }
    );

    for (const currentChunkToken of currentChunkTokensOwners.event?.tokens || []) {
      fetchedData[currentChunkToken.owner.id] = (fetchedData[currentChunkToken.owner.id] ?? 0) + 1;
    }

    currentChunkIndex++;
  } while (currentChunkTokensOwners.event?.tokens?.length);

  // readline.cursorTo(process.stdout, 0);

  return {
    totalWeight: Object.keys(fetchedData).length,
    shares: fetchedData,
  };
}

const poapStrategy: Strategy = {
  name: "POAP",
  description: "poaps here",
  logoUri: "https://image.com/thing.png",
  parameters: ["Event ID"],
  computeShares: poapCompute,
};

export default poapStrategy;
