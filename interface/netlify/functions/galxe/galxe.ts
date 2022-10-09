/* eslint-disable import/no-anonymous-default-export */
import { Handler } from "@netlify/functions";
import fetch from 'node-fetch';

const handler: Handler = async (event, context) => {
  console.log(event);
  console.log(context);
  console.log("query: %s", event.body);

  const response = await fetch("https://graphigo.prd.galaxy.eco/query", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Origin: "https://graphigo.prd.galaxy.eco",
    },
    body: JSON.stringify({
      query:
        `query nftHolders { campaign(id: \"${event.body}\") { holders(first: 10000, after: \"\") { totalCount pageInfo { startCursor endCursor hasNextPage hasPreviousPage } list { address } } } } `,
    }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify(await response.json()),
  };
};

export { handler };

