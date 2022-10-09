import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
// import { useConnect } from "hooks/useConnect";
import useWeb3 from "hooks/useWeb3";
import { useEffect } from "react";

const getLibrary = (provider: any): Web3Provider =>
  new Web3Provider(
    provider,
    typeof provider.chainId === "number"
      ? provider.chainId
      : typeof provider.chainId === "string"
      ? parseInt(provider.chainId)
      : "any"
  );

const Web3Connect: React.FC<{ children: JSX.Element }> = ({ children }) => {
  // const { tried } = useConnect();
  const { error } = useWeb3();

  useEffect(() => {
    console.log(error);
  }, [error]);
  // console.log(error?.name, tried, active);
  // if (
  //   !active &&
  //   tried &&
  //   error &&
  //   error?.name !== "UserRejectedRequestError" &&
  //   error?.name !== "UnsupportedChainIdError" &&
  //   error?.name !== "NoEthereumProviderError" &&
  //   error.message !== "Already processing eth_requestAccounts. Please wait."
  // )
  //   return <div>Error occured</div>;

  return children;
};

const Web3Manager: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3Connect>{children}</Web3Connect>
  </Web3ReactProvider>
);

export default Web3Manager;
