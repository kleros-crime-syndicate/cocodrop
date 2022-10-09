import { Strategy } from "types";
import request from "graphql-request";

interface Vote {
  voter: string;
  choice: number;
  vp: number;
}

const getBatch = async (proposalId: string, first: number, skip: number): Promise<Vote[]> => {
  const query = `{
    votes(where: { proposal: "${proposalId}" }, first: ${first}, skip: ${skip}){
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

const computeShares = async (...args: string[]): Promise<{ totalWeight: number; shares: Record<string, number> }> => {
  const votes = await getAllVotes(args[0]);
  const goodVotes = votes.filter((vote) => vote.vp > 0);

  const weightedVotes = goodVotes.reduce((acc, vote) => ({ ...acc, [vote.voter]: 1 }), {} as Record<string, number>);
  return {
    totalWeight: goodVotes.length,
    shares: weightedVotes,
  };
};

interface Proposal {
  title: string;
}

const getDisplayName = async (...args: string[]): Promise<string> => {
  const query = `{
    proposal(id: "${args[0]}"){
      title
    }
  }`;
  const result = await request("https://hub.snapshot.org/graphql", query);
  const proposal = result.proposal as Proposal;
  const title = `Voters in Proposal "${proposal.title}"`;
  return title;
};

const snapshot: Strategy = {
  name: "Snapshot",
  description: "Reward whoever votes in a proposal.",
  logoUri: "https://raw.githubusercontent.com/kleros-crime-syndicate/cocodrop/master/interface/src/assets/snapshot.png",
  parameters: ["Proposal Id"],
  computeShares,
  getDisplayName,
};

export default snapshot;
