import pohStrategy from "./poh";
import lensStrategy from "./lens";
import poapStrategy from "./poap";
// import generateMerkle from './generateMerkle';
// import publishMerkle from './publishMerkle';
// import { BigNumber } from "ethers";
// import { Merkle } from './generateMerkle';
// import { Metadata } from './publishMerkle';

// const mt: Merkle = await generateMerkle(BigNumber.from(100_000_000_000),pohStrategy);
// const meta: Metadata = {
//     title: "Fairdrop",
//     description: "All POH humans"
// }
// const contentId = await publishMerkle(mt,meta);
// console.log(contentId);

export default [pohStrategy, lensStrategy, poapStrategy];
