import { NavLink, Outlet } from "react-router-dom";
import Logo from "assets/cocologo.svg";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { shortenAddress } from "utils/address";
import { injected } from "utils/connectors";

const Layout: React.FC = () => {
  const { account, activate } = useWeb3React<Web3Provider>();

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

          <button
            className="text-3xl px-2 border-4 bg-white py-3 rounded-3xl font-display"
            onClick={() => activate(injected)}
          >
            {!!account ? shortenAddress(account) : "Connect"}
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
