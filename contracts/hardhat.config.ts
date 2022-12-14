import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@tenderly/hardhat-tenderly";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-watcher";
import "hardhat-docgen";
import "hardhat-contract-sizer";

dotenv.config();

const etherscanApis: any = JSON.parse(process.env.ETHERSCAN_APIS !== undefined ? process.env.ETHERSCAN_APIS : "{}")

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src",
  },
  networks: {
    hardhat: {
      live: false,
      saveDeployments: true,
      allowUnlimitedContractSize: true,
      tags: ["test", "local"],
    },
    localhost: {
      url: `http://127.0.0.1:8545`,
      chainId: 31337,
      saveDeployments: true,
      tags: ["test", "local"],
    },
    // Testnets ------------------
    goerli: {
      chainId: 5,
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      live: true,
      saveDeployments: true,
      tags: ["staging"],      
      verify: {
        etherscan: {
          apiKey: etherscanApis["5"]
        },
      },
    },
    mumbai: {
      chainId: 80001,
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      live: true,
      saveDeployments: true,
      tags: ["staging"],      
      verify: {
        etherscan: {
          apiKey: etherscanApis["80001"],
          apiUrl: "https://api-testnet.polygonscan.com/"
        },
      },
    },
    // Mainnets ------------------
    polygon: {
      chainId: 137,
      url: "https://rpc.ankr.com/polygon",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      live: true,
      saveDeployments: true,
      tags: ["production"],      
      verify: {
        etherscan: {
          apiKey: etherscanApis["137"],
          apiUrl: "https://polygonscan.com/"
        },
      },
    },
    gnosischain: {
      chainId: 100,
      url: "https://rpc.gnosischain.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      live: true,
      saveDeployments: true,
      tags: ["production"],      
      verify: {
        etherscan: {
          apiKey: etherscanApis["100"],
        },
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    relayer: {
      default: 1,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  // verify: {
  //   etherscan: {
  //     apiKey: process.env.ETHERSCAN_API_KEY_FIX,
  //   },
  // },
  watcher: {
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
    testArbitration: {
      tasks: [
        { command: "compile", params: { quiet: true } },
        { command: "test", params: { noCompile: true, testFiles: ["./test/arbitration/index.ts"] } },
      ],
      files: ["./test/**/*", "./src/**/*"],
    },
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: false,
  },
  tenderly: {
    project: "kleros-v2-local",
    username: process.env.TENDERLY_USERNAME !== undefined ? process.env.TENDERLY_USERNAME : "",
  },
};

export default config;
