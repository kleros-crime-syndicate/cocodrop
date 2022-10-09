import { BigNumber } from "ethers";
import { Share, Reward } from "types";

const normalizer = 1_000_000_000;

const getRewards = (totalAmount: BigNumber, totalWeight: number, shares: Share[]) => {
  const rewards: Reward[] = shares.map((share) => {
    const weight = share.weight;
    const rewardAmount = totalAmount
      .mul(BigNumber.from(Math.floor(weight * normalizer)))
      .div(BigNumber.from(Math.floor(totalWeight * normalizer)));
    const reward: Reward = {
      amount: rewardAmount,
      address: share.address,
    };
    return reward;
  });
  return rewards;
};

export default getRewards;
