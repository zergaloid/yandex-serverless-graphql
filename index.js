const {
  processRequest,
  renderGraphiQL
} = require('graphql-helix');
const { schema } = require("./schema");

module.exports.graphql = async (event, context) => {
  let body = null
  let isIql = event.queryStringParameters.type == 'iql'

  if (isIql)
    body = renderGraphiQL({
      endpoint: '?type=graphql'
    });
  else {

    const request = {
      body: Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'ascii').toString('ascii'),
      headers: event.headers,
      method: event.httpMethod
    };
  

    const query = '{ alphabet }'

    // Validate and execute the query
    body = await processRequest({
      query,
      schema,
      request,
    });
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': isIql ? 'text/html' : 'application/json'
    },
    body: body
  };
}