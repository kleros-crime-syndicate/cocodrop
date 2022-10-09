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

interface Proposal {
  title: string,
  choices: string[]
}

const getDisplayName = async (
  proposalId: string,
  choice: string
): Promise<string> => {
  const query = `{
    proposal(id: ${proposalId}){
      title
      choices
    }
  }`;
  const result = await request("https://hub.snapshot.org/graphql", query);
  const proposal = result.proposal as Proposal
  const actualChoice = Number(choice)
  const title = `Voters of "${proposal.choices[actualChoice]}" in Proposal "${proposal.title}"`
  return title;
}

const snapshotBriber: Strategy = {
  name: "Snapshot Briber",
  description: "Reward whoever votes properly. Note the choice is a number, and they start counting from 1",
  logoUri: "https://raw.githubusercontent.com/kleros-crime-syndicate/cocodrop/master/interface/src/assets/snapshot.png",
  parameters: ["Proposal Id", "Choice (as number)"],
  computeShares: computeShares as any,
  getDisplayName
};

export default snapshotBriber;
