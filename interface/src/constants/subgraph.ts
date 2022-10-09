import { ChainID } from "./chains";

export const SUBGRAPH_ENDPOINTS: Record<number, string> = {
  [ChainID.POLYGON]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/polygon",
  [ChainID.GOERLI]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/cocodrop-goerli",
  [ChainID.OPTIMISM]: "https://api.thegraph.com/subgraphs/name/kleros-crime-syndicate/cocodrop-optimism"
};
