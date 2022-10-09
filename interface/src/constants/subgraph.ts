import { ChainID } from "./chains";

export const SUBGRAPH_ENDPOINTS: Record<number, string> = {
  [ChainID.POLYGON]: "",
  [ChainID.GOERLI]: "https://api.thegraph.com/subgraphs/name/greenlucid/cocodrop-goerli",
};
