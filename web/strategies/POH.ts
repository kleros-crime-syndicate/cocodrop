import request from "graphql-request";
const vsprintf = require("sprintf-js").vsprintf;

console.log('POH Strategy');

const getAddressWeights = async () => {
    const queryInitial = `
    {
        submissions(where: {registered: true}, first: 1000){
          id
        }
    }`;
    const queryTemplate = `
    {
        submissions(where: {registered: true}, first: 1000, skip: %d){
          id
        }
    }`;
    var result;
    var count = 0;
    while(count < 1000){
        const bit = count == 0 ? await request(
            'https://gateway.thegraph.com/api/d98c97feb09f87d2d86956a815a5dbb5/subgraphs/id/CvzNejNZR2UTQ66wL7miGgfWh9dmiwgTtTfgQCBvMQRE',
            queryInitial
        ): await request(
            'https://gateway.thegraph.com/api/d98c97feb09f87d2d86956a815a5dbb5/subgraphs/id/CvzNejNZR2UTQ66wL7miGgfWh9dmiwgTtTfgQCBvMQRE',
            vsprintf(queryTemplate, count)
        );

        if (typeof result === typeof undefined)
            result = bit;
         else
            result.submissions += bit.submissions;
        if (bit.submissions.length < 1000)
            break;
        count += 1000;
    }
    return result.submissions.map((submission: any) => submission.id);
}

export{getAddressWeights}