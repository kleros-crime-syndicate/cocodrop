import { BigNumber } from "ethers";

export interface Strategy {
  name: string;
  description: string;
  logoUri: string;
  parameters: Array<string>;
  computeShares: (...args: any[]) => Promise<{ totalWeight: number; shares: Record<string, number> }>;
  getDisplayName: (...args: any[]) => string | Promise<string>;
}

export interface Reward {
  address: string;
  amount: BigNumber;
}
