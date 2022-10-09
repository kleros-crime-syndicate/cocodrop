import { NavLink, Outlet } from "react-router-dom";
import Logo from "assets/cocologo.svg";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { shortenAddress } from "utils/address";
import { injected } from "utils/connectors";
import Select from "react-select";
import { CHAIN_ID_TO_NAME } from "constants/chains";
import { hexValue } from "ethers/lib/utils";

const Layout: React.FC = () => {
  const { account, activate, chainId, library } = useWeb3React<Web3Provider>();

  return (
    <>
      <nav
        className={`
            absolute
            top-0
            z-30
            w-full
            py-4
            px-8
            hover:text-gray-700
            focus:text-gray-700
        `}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <NavLink to="/">
              <Logo className="w-48" />
            </NavLink>
          </div>

          <div className="flex items-center">
            {/* <span className="mr-4 text-xl font-display text-white">
              {!!account && !!chainId && CHAIN_ID_TO_NAME[chainId]}
            </span> */}

            {!!account && !!chainId && (
              <Select
                className="mr-8"
                value={{ value: chainId, label: CHAIN_ID_TO_NAME[chainId] } as any}
                onChange={(e: { value: number }) => {
                  if (!library) return;
                  library.send("wallet_switchEthereumChain", [{ chainId: hexValue(e.value) }]);
                }}
                isSearchable={false}
                options={Object.keys(CHAIN_ID_TO_NAME).map((chain: string) => ({
                  value: parseInt(chain),
                  label: CHAIN_ID_TO_NAME[chain],
                }))}
                placeholder="Select chain"
              />
            )}

            <button
              className="text-3xl px-2 border-4 bg-white py-3 rounded-3xl font-display"
              onClick={() => activate(injected)}
            >
              {!!account ? shortenAddress(account) : "Connect"}
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
