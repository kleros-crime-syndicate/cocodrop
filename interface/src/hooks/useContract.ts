import { useWeb3React } from "@web3-react/core";
import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { isAddress } from "utils/address";
import { useMemo } from "react";
import CocodropGnosis from "@cocodrop/cocodrop-contracts/deployments/gnosischain/Cocodrop.json";
import CocodropOptimism from "@cocodrop/cocodrop-contracts/deployments/optimism/Cocodrop.json";
import CocodropMumbai from "@cocodrop/cocodrop-contracts/deployments/mumbai/Cocodrop.json";
import CocodropGoerli from "@cocodrop/cocodrop-contracts/deployments/goerli/Cocodrop.json";
import { Cocodrop } from "@cocodrop/cocodrop-contracts/typechain-types/src/Cocodrop";
import ERC20Json from "@cocodrop/cocodrop-contracts/artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
import { IERC20 } from "@cocodrop/cocodrop-contracts/typechain-types/@openzeppelin/contracts/token/ERC20/IERC20";
import { ChainID } from "constants/chains";

export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useWeb3React<JsonRpcProvider>();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
    let address: string | undefined;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T;
}

function getSigner(provider: JsonRpcProvider, account: string): JsonRpcSigner {
  return provider.getSigner(account).connectUnchecked();
}

function getProviderOrSigner(provider: JsonRpcProvider, account?: string): JsonRpcProvider | JsonRpcSigner {
  return account ? getSigner(provider, account) : provider;
}

export function getContract(address: string, ABI: any, provider: JsonRpcProvider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(provider, account));
}

export const useERC20Contract = (address?: string) => useContract<IERC20>(address, ERC20Json.abi);

export const useCocodropContract = () =>
  useContract<Cocodrop>(
    {
      [ChainID.GNOSIS]: CocodropGnosis.address,
      [ChainID.OPTIMISM]: CocodropOptimism.address,
      [ChainID.GOERLI]: CocodropGoerli.address,
      [ChainID.MUMBAI]: CocodropMumbai.address,
    },
    CocodropGnosis.abi
  );
