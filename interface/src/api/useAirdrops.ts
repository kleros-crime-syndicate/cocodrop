import { AirdropsQuery } from "generated/graphql";
import useWeb3 from "hooks/useWeb3";
import useSWR from "swr";
import { sdk } from ".";

const useAirdrops = () => {
  const { chainId } = useWeb3();

  const airdrops = useSWR<AirdropsQuery["airdrops"]>(
    chainId ? [chainId, "airdrops"] : null,
    async (chain: number) => (await sdk[chain].Airdrops()).airdrops
  ).data;

  return airdrops;
};

export default useAirdrops;
