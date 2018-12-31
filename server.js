const express = require("express");
const graphql = require("graphql");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    pretty: true,
    graphiql: true
  })
);
app.listen(4001, () => console.log("Listening port 4001"));

// const query = '{user(id:"23"){firstName age}}';

// graphql
//   .graphql(schema, query)
//   .then(result => console.log(JSON.stringify(result, null, 2)));
