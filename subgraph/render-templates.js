const fs = require("fs-extra");
const mustache = require("mustache");

const chainNameToChainId = {
  mainnet: 1,
  goerli: 5,
  polygon: 137,
  xdai: 100,
  mumbai: 80001,
};

async function main() {
  const networkName = process.argv[2];
  const chainId = chainNameToChainId[networkName];
  const deployments = JSON.parse(fs.readFileSync("networks.json", "utf8"));
  const { address, startBlock } = deployments["Cocodrop"][chainId];

  const templateData = {
    network: networkName,
  };
  templateData["Cocodrop"] = {
    address: address,
    addressLowerCase: address.toLowerCase(),
    startBlock: startBlock,
  };

  for (const templatedFileDesc of [["subgraph", "yaml"]]) {
    const template = fs.readFileSync(`${templatedFileDesc[0]}.template.${templatedFileDesc[1]}`).toString();
    fs.writeFileSync(`${templatedFileDesc[0]}.${templatedFileDesc[1]}`, mustache.render(template, templateData));
  }
}

main();
