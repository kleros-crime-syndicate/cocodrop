<p align="center">
  <a href="https://cocodrop.netlify.app">
    <img alt="FIXME" src="https://raw.githubusercontent.com/kleros-crime-syndicate/cocodrop/master/docs/cocodrop.svg" width="512">
  </a>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/cocodrop/deploys"><img src="https://api.netlify.com/api/v1/badges/4c35592a-bbba-4c08-860a-7c83bb80314c/deploy-status" alt="Netlify Build Status"></a>
  </br>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with Prettier"></a>
</p>

# Cocodrop 🥥

The no code, point and click airdrop.

- Struggling with airdrops? Are you COCONUTZ?
- Lens, POAP, POH, Sismo, what do they have in common? C🥥C🥥drops!
- They said money doesn't grow in trees... but Cocodrops grow in Merkle trees!
- A Cocodrop a day keeps the community engaged.

<p align="center">

<img alt="coocrazy" src="https://cocodrop.netlify.app/parachute-coconut.9b30429d.webp" width="512">

</p>

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

See the address inside [the deployment artifacts](contracts/deployments). Why we built [#onPolygon](https://twitter.com/ndreimvp/status/1579059106929053697?s=20&t=iM_ys7AR4pdn1DANols7xA).

- Goerli [0xb62a93658992C6782E5d21a75814edf496069747](https://goerli.etherscan.io/address/0xb62a93658992C6782E5d21a75814edf496069747#code)
- Mumbai [0xccF51092B5EB2152883fEa91337BB13FBF52827C](https://mumbai.polygonscan.com/address/0xccF51092B5EB2152883fEa91337BB13FBF52827C#code)
- Optimism [0xb845f36779d9a0707f19bea934a30728f485d7c9](https://optimistic.etherscan.io/address/0xb845f36779d9a0707f19bea934a30728f485d7c9#code)
- Gnosis Chain [0x66Af21F227d37D411fD63173D13c74782721ABf1](https://gnosisscan.io/address/0x66Af21F227d37D411fD63173D13c74782721ABf1#code)

👨‍💻 Team Contributions
-----
![Alt](https://repobeats.axiom.co/api/embed/2cda6ef18e39cc65fc2ab6845e1792b50daf96aa.svg "Repobeats analytics image")

