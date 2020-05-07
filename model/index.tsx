import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: "http://game.bons.me/graphql",
});

const ApolloWrapper: React.FC<Props> = ({ children }: Props) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
