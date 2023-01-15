import * as S from './styles';

import { Button } from '@components/Button';
import { useRoutes } from '@hooks/useRoutes';
import squirtle from './squirtle.json';
import { ROUTES } from '@routes/types';

export const Welcome = () => {
  const { navigate } = useRoutes();

  return (
    <S.Container>
      <S.ContainerText>
        <S.Title>Welcome to</S.Title>
        <S.SubTitle>Pokédex</S.SubTitle>
      </S.ContainerText>

      <S.Content>
        <S.Lottie source={squirtle} />
      </S.Content>

      <S.Bottom>
        <Button title="Enter" onPress={() => navigate(ROUTES.HOME)} />
      </S.Bottom>
    </S.Container>
  );
};
