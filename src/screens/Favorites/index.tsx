import { useCallback, useEffect } from 'react';

import * as S from './styles';
import { Loading } from '@components/Load';

import { useContextFavorite } from '@context/FavoritesContext';
import { FlatListPokemon } from '@components/FlatListPokemon';
import { useRoutes } from '@hooks/useRoutes';

export const FavoritesPokemonPage = () => {
  const { getStorage, pokemonList, favLoad } = useContextFavorite();
  const { goBack } = useRoutes();

  useEffect(
    useCallback(() => {
      getStorage();
    }, []),
  );

  return (
    <>
      <S.Container>
        <Loading loading={favLoad} />
        <S.Header>
          <S.BackButton
            testID="favorite-back-button-icon"
            onPress={() => goBack()}
          >
            <S.Icon name="chevron-circle-left" />
          </S.BackButton>
          <S.Title testID="favorite-title">Favorites</S.Title>
        </S.Header>

        <FlatListPokemon data={pokemonList} collumn={2} />
      </S.Container>
    </>
  );
};
