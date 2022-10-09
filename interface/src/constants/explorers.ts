import { ChainID } from "./chains";

export const EXPLORER_ENDPOINTS = {
  [ChainID.GNOSIS]: "https://gnosisscan.io",
  [ChainID.GOERLI]: "https://goerli.etherscan.io",
  [ChainID.OPTIMISM]: "https://optimistic.etherscan.io",
  [ChainID.MUMBAI]: "https://mumbai.polygonscan.com",
};
