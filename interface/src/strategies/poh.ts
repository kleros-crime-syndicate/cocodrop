import request from "graphql-request";
import { Strategy } from "types";

const getBatch = async (first: number, lastId: string): Promise<string[]> => {
  const query = `{
    submissions(where: { id_gt: "${lastId}", registered: true }, first: ${first}){
      id
    }
  }`;
  const result = await request(
    "https://api.thegraph.com/subgraphs/name/kleros/proof-of-humanity-mainnet",
    query
  );
  return result.submissions.map((submission: any) => submission.id);
};

const getAllHumans = async (): Promise<string[]> => {
  const batches = [];
  let lastId = "";
  while (true) {
    console.log("Human batch", batches.length)
    const humans = await getBatch(1000, lastId);
    batches.push(humans);
    if (humans.length < 1000) break;
    lastId = humans[999]
  }
  return batches.flat(1);
};

const pohCompute = async () => {
  const humans = await getAllHumans();
  console.log("Got all humans, compute weights...")
  const weightedHumans = {}
  humans.forEach((human) => {
    weightedHumans[human] = 1;
  });
  return {
    totalWeight: humans.length,
    shares: weightedHumans,
  };
};

const getDisplayName = () => (
  "For accounts registered on Proof Of Humanity."
)

const pohStrategy: Strategy = {
  name: "Proof of Humanity",
  description: "Every registered human gets an equal share. Takes a long time to build.",
  logoUri: "https://app.proofofhumanity.id/images/governance.png",
  parameters: [],
  computeShares: pohCompute,
  getDisplayName,
};

export default pohStrategy;
