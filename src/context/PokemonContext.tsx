import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  IPokemonsContextData,
  PokemonProviderProps,
  DataPokemonProps,
  PokemonPayloadProps,
} from './types';

import api from '@services/api';

import { Alert } from 'react-native';
import { useQuery } from 'react-query';
const PokemonContext = createContext({} as IPokemonsContextData);

const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonList, setPokemonList] = useState<DataPokemonProps[]>([]);
  const [page, setPage] = useState(0);

  const fetchPokemons = useCallback(async () => {
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
  }, [page]);

  const pokemons = useQuery(['pokemons', page], () => fetchPokemons(), {
    onError: () => {
      Alert.alert(
        'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
      );
    },
  });

  useEffect(() => {
    if (pokemons.data) {
      const payloadPokemons = [
        ...pokemonList,
        ...(pokemons.data as DataPokemonProps[]),
      ];
      setPokemonList(payloadPokemons);
      return;
    }
    return;
  }, [pokemons.data]);

  const getMorePokemons = useCallback(() => {
    setPage(oldValue => oldValue + 20);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        getMorePokemons,
        pokemons,
        pokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const useContextPokemon = () => {
  const context = useContext(PokemonContext);
  return context;
};

export { PokemonProvider, useContextPokemon };
