import { useCallback, useEffect } from 'react';

import * as S from './styles';
import { Loading } from '@components/Load';

import { useContextFavorite } from '@context/FavoritesContext';
import { FlatListPokemon } from '@components/FlatListPokemon';
import { useRoutes } from '@hooks/useRoutes';
import { View } from 'react-native';

export const FavoritesPokemonPage = () => {
  const { getStorage, pokemonList } = useContextFavorite();
  const { goBack } = useRoutes();

  useEffect(
    useCallback(() => {
      getStorage();
    }, []),
  );

  return (
    <>
      <S.Container>
        <S.Header>
          <S.BackButton
            testID="favorite-back-button-icon"
            onPress={() => goBack()}
          >
            <S.Icon name="chevron-circle-left" />
          </S.BackButton>
          <S.Title testID="favorite-title">Favorites</S.Title>
        </S.Header>
        <View style={{ padding: 10 }}>
          <FlatListPokemon data={pokemonList} collumn={2} />
        </View>
      </S.Container>
    </>
  );
};
