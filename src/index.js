import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import Dragons from './components/dragons/Dragons';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

client
    .query({
        query: gql`
        {
  knights {
    id
    name
  }
}
        `
    })
    .then(result => console.log(result));

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
      <Dragons />
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
