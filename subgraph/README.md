# cocodrop subgraph

### How to deploy to a network

You'll have to `npx graph auth ...` somewhere.

1. update the `networks.json` with the new contract, and probably add the network -> networkId meaning to   `render-templates.js`
2. `node render-templates.js <network>
3. `npx graph codegen`
4. `npx graph build`
5. `npx graph deploy --product hosted-service <user>/<subgraph-name>`
