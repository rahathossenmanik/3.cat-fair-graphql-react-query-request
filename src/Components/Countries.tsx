import React from 'react';
import { useQuery } from 'react-query';
import { request } from 'graphql-request';

const COUNTRIES_QUERY = `
query {
  books {
    id,
    title
  }
}
`;

function queryResolver(query: any, variables: any) {
  const res = request('http://localhost:6543/graphql', query, variables);
  console.log(res);
  return res;
}

const CountryComponent = () => {
  const { data, error } = useQuery([COUNTRIES_QUERY, {}], queryResolver);

  if (error) {
    console.log(error);
    return <div>Had error! </div>;
  }

  if (data) {
    console.log(data);
  }
  return <>{data ? <div>{JSON.stringify(data, null, 2)}</div> : <div>Waiting for data ... </div>}</>;
};

export default CountryComponent;
