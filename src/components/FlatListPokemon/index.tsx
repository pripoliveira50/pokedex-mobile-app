import { useCallback } from 'react';
import * as S from './styles';

import { FavProps } from './types';
import { Card } from '@components/Card';
import { useRoutes } from '@hooks/useRoutes';
import { ROUTES } from '@routes/types';

export const FlatListPokemon = ({
  data,
  collumn,
  horizontal,
  loadMorePokemons,
  ListFooterComponent,
}: FavProps) => {
  const { navigate } = useRoutes();

  const handleNavigationDetails = useCallback((pokemonName: string) => {
    navigate(ROUTES.POKEMON_DETAILS, {
      pokemonName,
    });
  }, []);

  const renderList = useCallback(({ item }) => {
    return (
      <Card
        testID="card-pokemon"
        data={item}
        onPress={() => {
          handleNavigationDetails(item.name);
        }}
      />
    );
  }, []);
  const emptyList = useCallback(() => {
    return (
      <S.Title testID="flatlist-empty">
        There are no pokemons in this list
      </S.Title>
    );
  }, []);

  return (
    <S.ListPokemon
      testID="flatlist-pokemon"
      data={data}
      renderItem={renderList}
      ListEmptyComponent={emptyList}
      numColumns={collumn}
      horizontal={horizontal}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.1}
      keyExtractor={(_, index) => index.toString()}
      ListFooterComponent={ListFooterComponent}
    />
  );
};
