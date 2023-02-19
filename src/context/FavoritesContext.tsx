import { createContext, useContext, useState, useCallback } from 'react';
import {
  DataPokemonProps,
  FavoritesProviderProps,
  IFavoritesContextData,
} from './types';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { POKEMON } from '@config/enviroments';
import { Alert } from 'react-native';

const FavoritesContext = createContext({} as IFavoritesContextData);

function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [pokemonList, setPokemonList] = useState<DataPokemonProps[]>([]);
  const { getItem, setItem } = useAsyncStorage(POKEMON);
  const [favLoad, setFavLoad] = useState<boolean>(true);

  const setStorage = useCallback(async (value: DataPokemonProps) => {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      if (
        data.filter((pokemon: DataPokemonProps) => pokemon.name === value.name)
          .length
      ) {
        data.splice(
          data.findIndex((data: DataPokemonProps) => data.name === value.name),
          1,
        );

        await setItem(JSON.stringify(data));
        return;
      }
      const pokemonList = [...data, value];
      return await setItem(JSON.stringify(pokemonList));
    } catch {
      return Alert.alert(
        'Ops, ocorreu um erro ao salvar o pokemon, tente novamente.',
      );
    }
  }, []);

  async function getStorage() {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      setPokemonList(data);
    } catch (e) {
      console.log(e);
      return Alert.alert(
        'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
      );
    } finally {
      setFavLoad(false);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        setStorage,
        getStorage,
        pokemonList,
        favLoad,
        setFavLoad,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useContextFavorite() {
  const context = useContext(FavoritesContext);
  return context;
}

export { FavoritesProvider, useContextFavorite };
