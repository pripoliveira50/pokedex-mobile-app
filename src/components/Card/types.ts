import { DataPokemonProps } from '@context/types';
import { TouchableOpacityProps } from 'react-native';

export type CardProps = {
  data: DataPokemonProps;
} & TouchableOpacityProps;

export type PokemonTypeStyleProps = {
  type: string;
};

export const Url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
