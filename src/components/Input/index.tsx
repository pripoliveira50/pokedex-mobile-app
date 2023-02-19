import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles';
import { InputProps } from './types';

export const Input = ({ resetSearch, searchPokemon, ...rest }: InputProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Input {...rest} />
        <TouchableOpacity onPress={resetSearch}>
          <S.Icon name="remove" />
        </TouchableOpacity>
      </S.Content>
      <S.SearchButton onPress={searchPokemon}>
        <S.Icon name="search" />
      </S.SearchButton>
    </S.Container>
  );
};
