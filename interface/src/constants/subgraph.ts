import { ChainID } from "./chains";

export const SUBGRAPH_ENDPOINTS: Record<number, string> = {
  [ChainID.GOERLI]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/cocodrop-goerli",
  [ChainID.OPTIMISM]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/cocodrop-optimism",
  [ChainID.GNOSIS]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/cocodrop-gnosischain",
  [ChainID.MUMBAI]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/cocodrop-mumbai",
};
