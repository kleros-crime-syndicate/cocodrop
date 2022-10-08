<p align="center">
  <a href="https://cocodrop.netlify.app">
    <img alt="FIXME" src="https://raw.githubusercontent.com/kleros-crime-syndicate/cocodrop/master/cocodrop.svg" width="512">
  </a>
</p>


</b>

<p align="center">
  <a href="https://app.netlify.com/sites/cocodrop/deploys"><img src="https://api.netlify.com/api/v1/badges/XXXX/deploy-status" alt="Netlify Build Status"></a>
  </br>
  <a href="https://github.com/kleros-crime-syndicate/cocodrop/actions/workflows/contracts-testing.yml"><img src="https://github.com/kleros-crime-syndicate/cocodrop/actions/workflows/contracts-testing.yml/badge.svg?branch=master" alt="Unit testing"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with Prettier"></a>
</p>

# Cocodrop 🥥

🛠 Toolchain
-----

- Solidity 0.8
- Hardhat
- Ethers
- TheGraph
- Chains: Gnosis Chain, Polygon Matic
- Waffle
- Typescript
- Node 16
- Yarn 3 without [PlugnPlay](https://yarnpkg.com/getting-started/migration/#switching-to-plugnplay)


🏃‍♂️ Getting Started
-----

#### Install the dependencies

```bash
$ npm install -g depcheck

# sets up yarn version
$ yarn prepare

$ yarn install
```

📂 Repo Structure
-----

Each directory at the root of this repository contains code for each individual part that enables this integration:

- **`interface/`**: Web front-end [Learn more](interface/README.md).
  - *Notice: while this is a centralized service, it exists only for convenience. Anyone can fulfill the role of the bots if they wish to do so.*
- **`contracts/`**: Smart contracts layer [Learn more](contracts/README.md).
- **`subgraph/`**: TheGraph middleware for transactions indexing [Learn more](subgraph/README.md).

⛓ Deployment
-----

See the address inside [the deployment artifacts](contracts/deployments/mumbai).

👨‍💻 Team Contributions
-----
![Alt](https://repobeats.axiom.co/api/embed/2cda6ef18e39cc65fc2ab6845e1792b50daf96aa.svg "Repobeats analytics image")
<p align="left">
  <a href="https://github.com/kleros-crime-syndicate/cocodrop/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=kleros-crime-syndicate/cocodrop&max=300">
  </a>
</p>
