import React from 'react';
import { useQuery } from 'react-query';
import { request } from 'graphql-request';

const COUNTRIES_QUERY = `
query {
  countries {
    code,
    name
  }
}
`;

function queryResolver(query: any, variables: any) {
  return request('https://countries.trevorblades.com/', query, variables);
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
  return (
    <>
      {data ? (
        <div>
          <ol>
            {data.countries.map((x: any) => (
              <li key={x.code}>{x.name}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div>Waiting for data ... </div>
      )}
    </>
  );
};

export default CountryComponent;
