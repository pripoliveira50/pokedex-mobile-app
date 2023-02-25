import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { PokemonProviderProps } from './types';

const queryClient = new QueryClient();

const ReactQueryProvider = ({
  children,
  dehydratedState,
}: PokemonProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
