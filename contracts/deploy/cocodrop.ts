import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { BigNumber } from "ethers";

const deployCocodrop: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, execute } = deployments;
  const { AddressZero } = hre.ethers.constants;

  // fallback to hardhat node signers on local network
  const deployer = (await getNamedAccounts()).deployer ?? (await hre.ethers.getSigners())[0].address;

  const chainId = await getChainId();
  if (chainId === "31337") {
    // Hardhat network
    console.log("Hardhat network");
    await deploy("Cocodrop", {
        from: deployer,        
        log: true,
      });

  } else if (chainId === "80001") {
    // Mumbai wMATIC
    erc20Address = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";
  }
};

deployCocodrop.tags = ["Cocodrop"];
export default deployCocodrop;
