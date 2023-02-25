import { ReactNode } from 'react';

//Favorites
export interface FavoritesProviderProps {
  children: ReactNode;
}
export interface IFavoritesContextData {
  setStorage(value: DataPokemonProps): Promise<void>;
  getStorage(): Promise<void>;
  pokemonList: DataPokemonProps[];
}

//Types Pokemon
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
