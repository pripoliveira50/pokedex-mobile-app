import { PokemonDetailProps, TypeName } from '@screens/PokemonDetails/types';
import { ReactNode } from 'react';

//PokemonList
export interface PokemonProviderProps {
  children: ReactNode;
}

export interface IPokemonsContextData {
  getPokemonList: () => Promise<void>;
  PokemonSearch(pokemon: string): Promise<void>;
  setFindedPokemon: (value: React.SetStateAction<DataPokemonProps[]>) => void;
  pokemonList: DataPokemonProps[];
  findedPokemon: DataPokemonProps[];
  load: boolean;
}

//Details
export interface PokemonProviderDetailsProps {
  children: ReactNode;
}

export interface IPokemonsDetailsContextData {
  getPokemonDetails(pokemonId: string): Promise<void>;
  pokemonDetails: PokemonDetailProps;
  load: boolean;
  setLoad: (value: boolean) => void;
}

//Favorites
export interface FavoritesProviderProps {
  children: ReactNode;
}

export interface IFavoritesContextData {
  setStorage(key: string, value: DataPokemonProps): Promise<void>;
  getStorage(): Promise<void>;
  setFavLoad: (value: boolean) => void;
  pokemonList: DataPokemonProps[];
  favLoad: boolean;
}

export type DataPokemonProps = {
  name: string;
  id: number;
  types: PokemonType[];
};

export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonPayloadProps = {
  name: string;
  id: number;
  types: PokemonType[];
  url: string;
};
