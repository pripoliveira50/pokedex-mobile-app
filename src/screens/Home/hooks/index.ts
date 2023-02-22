import api from '@services/api';
import {
  GetMorenInfoProps,
  PokemonPayloadProps,
} from '@services/react-query/types';
import { useCallback, useState } from 'react';

export const usePokemonProvider = () => {
  const [findedPokemon, setFindedPokemon] = useState<GetMorenInfoProps[]>([]);

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

  return { fetchPokemons, searchPokemon, findedPokemon };
};
