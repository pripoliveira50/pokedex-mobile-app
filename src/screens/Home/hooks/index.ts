import api from '@services/api';
import { keyFetchPokemons } from '@services/react-query/keys';
import {
  GetMorenInfoProps,
  PokemonPayloadProps,
} from '@services/react-query/types';
import { useCallback } from 'react';
import { UseQueryOptions, useQuery } from 'react-query';
import { keySearchPokemon } from '../../../services/react-query/keys';

export const usePokemonProvider = () => {
  const fetchPokemons = useCallback(async (page: number) => {
    const response = await api.get(`/pokemon?limit=20&offset=${page}`);
    const { results } = response.data;

    const getMoreInfo = async (url: string) => {
      const response = await api.get(url);
      const { id, types, name } = response.data;

      return { id, types, name };
    };

    return Promise.all(
      results.map(async (pokemon: PokemonPayloadProps) => {
        const { id, types, name } = await getMoreInfo(pokemon.url);

        return {
          name,
          id,
          types,
        };
      }),
    );
  }, []);

  const searchPokemon = async (pokemon: string) => {
    const response = await api.get(`/pokemon/${pokemon}`);

    const { id, types, name } = response.data;
    const filterdPokemon = {
      name,
      id,
      types,
    };
    const loadMorePokemons = [filterdPokemon];

    return loadMorePokemons;
  };

  const useFetchPokemons = (page: number, options?: UseQueryOptions) =>
    useQuery(keyFetchPokemons(page), () => fetchPokemons(page), {
      ...options,
      retry: 3,
    });

  const useSearchPokemon = (
    pokemon: string,
    options?: UseQueryOptions<GetMorenInfoProps[]>,
  ) =>
    useQuery(keySearchPokemon(pokemon), () => searchPokemon(pokemon), {
      ...options,
      enabled: false,
    });

  return { useFetchPokemons, useSearchPokemon };
};
