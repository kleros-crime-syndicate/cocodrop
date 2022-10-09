export interface IpfsFile {
  metadata: {
    title: string;
    description: string;
    strategy?: string;
  };
  merkleTree: Record<
    string,
    {
      value: string;
      proof: string[];
    }
  >;
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
