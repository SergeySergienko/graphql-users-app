const express = require("express");
const graphql = require("graphql");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const port = 4001;
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    pretty: true,
    graphiql: true
  })
);
app.listen(port, () =>
  console.log(`Server starts at localhost:${port}/graphql`)
);

// const query = '{user(id:"23"){firstName age}}';

// graphql
//   .graphql(schema, query)
//   .then(result => console.log(JSON.stringify(result, null, 2)));
