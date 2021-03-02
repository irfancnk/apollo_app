import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
//

/**
 * If error occurs,  alert it on message box
 */
const errorLink = onError(({ grahqlErrors, networkError }) => {
    if (grahqlErrors) {
        for (let i = 0; i < grahqlErrors.length; i++) {
            const { message } = grahqlErrors[i]
            alert(`Graphql error ${message}`);
        }
    }
});

const link = from([errorLink, new HttpLink({ uri: "/graphql" })]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

/**
 * Higher Order Component, wrapper around other components
 * @param {*} param0 
 */
const GqlProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GqlProvider;