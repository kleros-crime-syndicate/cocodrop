import { BigNumber } from "ethers";

const normalizer = 1_000_000_000;

const getRewards = (totalAmount: BigNumber, totalWeight: number, shares: Record<string, number>) =>
  Object.keys(shares).map((address) => ({
    amount: totalAmount
      .mul(BigNumber.from(Math.floor(shares[address] * normalizer)))
      .div(BigNumber.from(Math.floor(totalWeight * normalizer))),
    address,
  }));

export default getRewards;
