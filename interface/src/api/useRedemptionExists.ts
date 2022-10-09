import useWeb3 from "hooks/useWeb3";
import useSWR from "swr";
import { sdk } from ".";

const useRedemptionExists = (airdropId: string, address?: string | null) => {
  const { chainId } = useWeb3();

  const airdrops = useSWR<boolean>(
    chainId && address ? [chainId, airdropId, address, "redemption_exists"] : null,
    async (chain: number, airdropId: string, address: string) =>
      (await sdk[chain].Redemption({ id: `${airdropId}@${address}` })).redemption !== null
  ).data;

  return airdrops;
};

export default useRedemptionExists;
