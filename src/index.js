import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Dragons from './components/Dragons';
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
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
        <Dragons />
      </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
