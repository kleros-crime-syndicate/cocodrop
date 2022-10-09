import useAirdrops from "api/useAirdrops";
import { AirdropsQuery } from "generated/graphql";
import useIPFS from "hooks/useIPFS";
import React from "react";
import { IpfsFile } from "types/global";

const AirdropCard: React.FC<{ airdrop: ArrayElement<AirdropsQuery["airdrops"]> }> = ({ airdrop }) => {
  const [file] = useIPFS<IpfsFile>(airdrop.ipfs);

  if (!file) return null;

  return (
    <div className="w-48 flex flex-col border rounded">
      <span>{file.name}</span>
      <span>{airdrop.airdropId}</span>
    </div>
  );
};

const Claim: React.FC = () => {
  const airdrops = useAirdrops();

  return (
    <div>
      <div>
        {airdrops ? airdrops.map((airdrop) => <AirdropCard airdrop={airdrop} />) : <span>No airdrops available</span>}
      </div>
    </div>
  );
};

export default Claim;
