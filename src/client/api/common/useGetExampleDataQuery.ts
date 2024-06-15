import {useQuery, UseQueryOptions, UseQueryResult} from 'react-query';
import {api} from '@api/index';
import {ExampleData} from '@common/ExampleData';

const getExampleDataQueryKey = ['get-example-data'];

export function useGetExampleDataQuery(
    options: UseQueryOptions<ExampleData, Error, ExampleData, typeof getExampleDataQueryKey> = {},
): UseQueryResult<ExampleData, Error> {
  return useQuery(
    getExampleDataQueryKey,
      async () => {
        return api.getExampleData();
      },
      {
        refetchOnWindowFocus: false,
        ...options,
      },
  );
}
