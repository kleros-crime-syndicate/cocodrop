import request, { gql } from "graphql-request";
import { Strategy } from "types";

export type Wallet = {
  address: string;
};

export type FollowerType = {
  wallet: Wallet;
};

export type GetFollowersType = {
  followers: {
    items: FollowerType[];
    pageInfo: PageInfo;
  };
};

export type PageInfo = {
  prev: string;
  next: string;
  totalCount: number;
};

export const getFollowersQuery = async (profileId: string, cursor: string): Promise<GetFollowersType> => {
  return await request(
    "https://api.lens.dev/",
    gql`
      query followers($request: FollowersRequest!) {
        followers(request: $request) {
          items {
            wallet {
              address
            }
          }
          pageInfo {
            prev
            next
            totalCount
          }
        }
      }
    `,
    { request: { profileId, limit: 50, ...(cursor ? { cursor } : {}) } }
  );
};

async function* getFollowers(profileId: string): AsyncGenerator<FollowerType, void, undefined> {
  let cursor = "";
  let lensFollowers: GetFollowersType;
  do {
    lensFollowers = await getFollowersQuery(profileId, cursor);
    yield* lensFollowers.followers.items;
    cursor = lensFollowers.followers.pageInfo.next;
  } while (lensFollowers.followers.items.length > 0);
}

const lensCompute = async (profileId: string) => {
  const dataProfiles = {} as Record<string, number>;
  for await (const item of getFollowers(profileId)) {
    dataProfiles[item.wallet.address] = 1;
  }

  return {
    totalWeight: Object.keys(dataProfiles).length,
    shares: dataProfiles,
  };
};

const getDisplayName = async (profileId: string) => {
  const { name } = await request(
    "https://api.lens.dev/",
    gql`
      query username($profileId: String) {
        profile(request: { profileId: $profileId }) {
          name
        }
      }
    `,
    { request: { profileId: profileId } }
  );
  return (`For accounts following ${name} on Lens.`);
};

const lensStrategy: Strategy = {
  name: "Lens Followers",
  description: "Reward your lens followers",
  logoUri: "https://image.com/thing.png",
  parameters: ["Profile ID"],
  computeShares: lensCompute,
  getDisplayName,
};

export default lensStrategy;
