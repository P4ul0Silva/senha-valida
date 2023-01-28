import e from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./types/passwordType.js";
import { passwordResolver } from "./resolvers/passwordResolver.js";

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: passwordResolver,
});

const app = e();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);
const port = 8080;
app.listen(port);
console.log(`Running GraphQL API server at http://localhost:${port}/graphql`);
