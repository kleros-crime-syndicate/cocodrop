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
    const humans = await getBatch(1000, lastId);
    batches.push(humans);
    if (humans.length < 1000) break;
    lastId = humans[999]
  }
  return batches.flat(1);
};

const pohCompute = async () => {
  const humans = await getAllHumans();
  const weightedHumans = humans.reduce((acc, human) => ({ ...acc, [human]: 1 }), {} as Record<string, number>);
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
  description: "Every registered human gets an equal share",
  logoUri: "https://app.proofofhumanity.id/images/governance.png",
  parameters: [],
  computeShares: pohCompute,
  getDisplayName,
};

export default pohStrategy;
