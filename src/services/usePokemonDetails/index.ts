import api from '@services/axios';
import { keyFetchPokemonDetails } from '@services/react-query/keys';
import { useCallback } from 'react';
import { UseQueryOptions, useQuery } from 'react-query';
import { TypeName } from '@screens/PokemonDetails/types';
import { PokemonDetailData } from '@services/react-query/types';

export const usePokemoDetails = () => {
  const getPokemonDetails = useCallback(async (pokemonId: string) => {
    const pokemonDetailsPromise = await api.get(`pokemon/${pokemonId}/`);
    const pokemonEggsPromise = await api.get(`pokemon-species/${pokemonId}/`);

    return Promise.all([pokemonDetailsPromise, pokemonEggsPromise]).then(
      pokemon => {
        return {
          stats: pokemon[0].data.stats,
          abilities: pokemon[0].data.abilities,
          id: pokemon[0].data.id,
          name: pokemon[0].data.name,
          types: pokemon[0].data.types,
          eggs: pokemon[1].data.egg_groups,
          color: pokemon[0].data.types[0].type.name as TypeName,
        };
      },
    );
  }, []);

  const useFetchPokemonDetails = (
    pokemonId: string,
    options?: UseQueryOptions<PokemonDetailData>,
  ) =>
    useQuery(
      keyFetchPokemonDetails(pokemonId),
      () => getPokemonDetails(pokemonId),
      {
        ...options,
        retry: 3,
      },
    );

  return { useFetchPokemonDetails };
};
