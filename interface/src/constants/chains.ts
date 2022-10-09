export enum ChainID {
  MUMBAI = 80001,
  GNOSIS = 100,
  GOERLI = 5,
  OPTIMISM = 10,
}

export const CHAIN_ID_TO_NAME = {
  [ChainID.GNOSIS]: "Gnosis Chain",
  [ChainID.GOERLI]: "Goerli",
  [ChainID.MUMBAI]: "Mumbai",
  [ChainID.OPTIMISM]: "Optimism",
};

export const SUPPORTED_CHAIN_IDS = [ChainID.GNOSIS, ChainID.OPTIMISM, ChainID.MUMBAI, ChainID.GOERLI];
