import { QueryKey, useQuery, UseQueryOptions } from 'react-query';

import api from '@services/axios';

import {
  DataGetPokemonProps,
  GetMorenInfoProps,
  PokemonPayloadProps,
} from '../react-query/types';
import { AxiosError } from 'axios';

export const getSearchPokemon = (pokemon: string): QueryKey => [
  'searchPokemon',
  pokemon,
];

export const usePokemonSearch = (
  pokemon: string,
  options?: UseQueryOptions<GetMorenInfoProps, AxiosError>,
) =>
  useQuery(
    getSearchPokemon(pokemon),
    () => api.get(`/pokemon/${pokemon}`).then(response => response.data),
    options,
  );
