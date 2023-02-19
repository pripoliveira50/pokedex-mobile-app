import { useRoutes } from '@hooks/useRoutes';
import { useMemo, useCallback } from 'react';

import * as S from './styles';

import { ROUTES } from '@routes/types';

export const CarouselMenu = () => {
  const { navigate } = useRoutes();

  const data = useMemo(() => {
    return [
      {
        route: 'Favorite Pokemons',
        path: () => navigate(ROUTES.FAVORITES),
      },
    ];
  }, [navigate]);

  const renderItem = useCallback(({ item }) => {
    return (
      <S.Container onPress={item.path}>
        <S.Text>{item.route}</S.Text>
      </S.Container>
    );
  }, []);

  return (
    <S.ListMenu
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};
