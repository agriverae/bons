import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";

const client = new ApolloClient({
  uri: "http://game.bons.me/graphql",
});

const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
