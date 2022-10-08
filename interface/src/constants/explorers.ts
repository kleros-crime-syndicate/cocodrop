import { ChainID } from "./chains";

export const EXPLORER_ENDPOINTS = {
  [ChainID.GNOSISCHAIN]: "https://gnosisscan.io",
  [ChainID.GOERLI]: "https://goerli.etherscan.io",
  [ChainID.POLYGON]: "https://polygonscan.com",
  [ChainID.MUMBAI]: "https://mumbai.polygonscan.com",
};
