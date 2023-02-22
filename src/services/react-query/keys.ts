import { QueryKey } from 'react-query';

export const keyFetchPokemons = (page: number): QueryKey => ['pokemons', page];

export const keySearchPokemon = (pokemon: string): QueryKey => [
  'searchPokemon',
  pokemon,
];
