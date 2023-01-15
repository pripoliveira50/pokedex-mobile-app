import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  resetSearch?: () => void;
  searchPokemon?: () => void;
}
