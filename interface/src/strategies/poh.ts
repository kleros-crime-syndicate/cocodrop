import request from "graphql-request";
import { Share, Strategy } from "types";

const getBatch = async (first: number, skip: number): Promise<string[]> => {
  const query = `{
    submissions(where: {registered: true}, first: ${first}, skip: ${skip}){
      id
    }
  }`;
  const result = await request(
    "https://gateway.thegraph.com/api/d98c97feb09f87d2d86956a815a5dbb5/subgraphs/id/CvzNejNZR2UTQ66wL7miGgfWh9dmiwgTtTfgQCBvMQRE",
    query
  );
  return result.submissions.map((submission: any) => submission.id);
};

const getAllHumans = async (): Promise<string[]> => {
  const batches = [];
  let skip = 0;
  while (true) {
    const humans = await getBatch(1000, skip);
    batches.push(humans);
    if (humans.length < 1000) break;
  }
  return batches.flat(1);
};

const pohCompute = async (): Promise<{totalWeight: number, shares: Share[]}> => {
  const humans = await getAllHumans();
  const weightedHumans = humans.map((human) => ({ address: human, weight: 1 }));
  return {
    totalWeight: humans.length,
    shares: weightedHumans,
  };
};

const pohStrategy: Strategy = {
  name: "Proof of Humanity",
  description: "Every registered human gets one share",
  logoUri: "https://image.com/thing.png",
  computeShares: pohCompute
}

export default pohStrategy
