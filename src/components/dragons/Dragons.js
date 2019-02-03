import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Dragons = () => (
  <Query
    query={gql`
    {
     dragons {
       id
       name
    }
}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.dragons.map(({ id, name }) => (
        <div key={id}>
          <p>{id}: {name}</p>
        </div>
      ));
    }}
  </Query>
);


export default Dragons;