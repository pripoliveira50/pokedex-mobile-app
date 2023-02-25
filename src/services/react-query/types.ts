import {
  IAbilitys,
  IAttributes,
  PokemonEggs,
} from '@screens/PokemonDetails/types';

//React query
export interface PokemonProviderProps {
  children: React.ReactNode;
  dehydratedState?: boolean;
}

//useGetPokemonProvider

export type PokemonPayloadProps = {
  data?: any;
  name: string;
  id: number;
  types: PokemonType[];
  url: string;
};

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

//usePokemonDetails

export type PokemonDetailData = {
  id: number;
  name: string;
  stats: IAttributes[];
  abilities: IAbilitys[];
  types: PokemonType[];
  eggs: PokemonEggs[];
  color: string;
};
