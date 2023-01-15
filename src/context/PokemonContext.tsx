import { createContext, useContext, useState } from 'react';
import {
  IPokemonsContextData,
  PokemonProviderProps,
  DataPokemonProps,
  PokemonPayloadProps,
} from './types';

import api from '@services/api';

import { Alert } from 'react-native';
const PokemonContext = createContext({} as IPokemonsContextData);

function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemonList, setPokemonList] = useState<DataPokemonProps[]>([]);
  const [findedPokemon, setFindedPokemon] = useState<DataPokemonProps[]>([]);

  const [load, setLoad] = useState<boolean>(true);
  const [page, setPage] = useState(0);

  async function getPokemonList() {
    const response = await api.get(`/pokemon?limit=20&offset=${page}`);
    const { results } = response.data;

    async function getMoreInfo(url: string) {
      const response = await api.get(url);
      const { id, types, name } = response.data;

      return { id, types, name };
    }

    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: PokemonPayloadProps) => {
        const { id, types, name } = await getMoreInfo(pokemon.url);

        return {
          name,
          id,
          types,
        };
      }),
    )
      .catch(error => {
        console.log('error: ', error);
        Alert.alert(
          'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
        );
      })
      .finally(() => {
        setLoad(false);
      });
    const loadMorePokemons = [
      ...pokemonList,
      ...(payloadPokemons as DataPokemonProps[]),
    ];
    setPage(page + 20);
    setPokemonList(loadMorePokemons as DataPokemonProps[]);
  }

  async function PokemonSearch(pokemon: string) {
    try {
      const response = await api.get(`/pokemon/${pokemon}`);

      const { id, types, name } = response.data;
      console.log(response.data);
      const filterdPokemon = {
        name,
        id,
        types,
      };
      const loadMorePokemons = [filterdPokemon];

      setFindedPokemon(loadMorePokemons);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        getPokemonList,
        pokemonList,
        load,
        PokemonSearch,
        findedPokemon,
        setFindedPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

function useContextPokemon() {
  const context = useContext(PokemonContext);
  return context;
}

export { PokemonProvider, useContextPokemon };
