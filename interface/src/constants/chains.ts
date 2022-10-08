export enum ChainID {
  POLYGON = 137,
  MUMBAI = 80001,
  GNOSISCHAIN = 100,
  GOERLI = 5
}

export const CHAIN_ID_TO_NAME = {
  [ChainID.MUMBAI]: "mumbai",
  [ChainID.POLYGON]: "POLYGON",
  [ChainID.GNOSISCHAIN]: "Gnosis Chain",
  [ChainID.GOERLI]: "Goerli"
};

export const SUPPORTED_CHAIN_IDS = [ChainID.MUMBAI];
