export enum ChainID {
  POLYGON = 137,
  MUMBAI = 80001,
  GNOSISCHAIN = 100,
  GOERLI = 5,
  OPTIMISM = 10
}

export const CHAIN_ID_TO_NAME = {
  [ChainID.GOERLI]: "GOERLI",
  [ChainID.POLYGON]: "POLYGON",
  [ChainID.GNOSISCHAIN]: "Gnosis Chain",
  [ChainID.GOERLI]: "Goerli",
  [ChainID.OPTIMISM]: "Optimism"
};

export const SUPPORTED_CHAIN_IDS = [ChainID.GOERLI];
