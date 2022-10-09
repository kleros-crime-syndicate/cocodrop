export interface IpfsFile {
  metadata: {
    title: string;
    description: string;
    strategy?: string;
  };
  merkleTree: {
    claims: Record<
      string,
      {
        value: string;
        proof: string[];
      }
    >;
    root: string;
    width: number;
    height: number;
  };
}

/*
    {
      name: string;
      description: string;
      merkleTree: {
        "claimer_address": {
          value: uint256,
          proof: address[]
        }
      }[]
    }
*/
