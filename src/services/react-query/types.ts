import { PokemonDetailProps } from '@screens/PokemonDetails/types';
import { ReactNode } from 'react';

//React query
export interface PokemonProviderProps {
  children: React.ReactNode;
  dehydratedState?: boolean;
}

export type DataGetPokemonProps = {
  results: PokemonPayloadProps[];
};

export type GetMorenInfoProps = {
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
  data?: any;
  name: string;
  id: number;
  types: PokemonType[];
  url: string;
};
