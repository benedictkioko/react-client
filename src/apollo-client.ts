import ApolloClient, { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8000/api/v1/",
});

export { client };
