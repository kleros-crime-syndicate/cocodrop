import { Strategy } from "types";
import request from "graphql-request";

interface Vote {
  voter: string;
  choice: number;
  vp: number;
}

const getBatch = async (proposalId: string, first: number, skip: number): Promise<Vote[]> => {
  const query = `{
    votes(where: { proposal: ${proposalId} }, first: ${first}, skip: ${skip}){
      voter
      choice
      vp
    }
  }`;
  const result = await request("https://hub.snapshot.org/graphql", query);
  return result.votes;
};

const getAllVotes = async (proposalId: string): Promise<Vote[]> => {
  const batches = [];
  let skip = 0;
  const increment = 500;
  while (true) {
    const votes = await getBatch(proposalId, increment, skip);
    batches.push(votes);
    if (votes.length < increment) break;
    skip += increment;
  }
  return batches.flat(1);
};

const computeShares = async (
  proposalId: string,
  choice: string
): Promise<{ totalWeight: number; shares: Record<string, number> }> => {
  const votes = await getAllVotes(proposalId);

  const actualChoice = Number(choice);
  const goodVotes = votes.filter((vote) => vote.choice === actualChoice && vote.vp > 0);

  const weightedVotes = goodVotes.reduce((acc, vote) => ({ ...acc, [vote.voter]: 1 }), {} as Record<string, number>);
  return {
    totalWeight: goodVotes.length,
    shares: weightedVotes,
  };
};

const snapshotBriber: Strategy = {
  name: "Snapshot Briber",
  description: "Reward whoever votes properly. Note the choice is a number, and they start counting from 1",
  logoUri: "https://image.com/thing.png",
  parameters: ["Proposal Id", "Choice (as number)"],
  computeShares: computeShares as any,
};

export default snapshotBriber;
