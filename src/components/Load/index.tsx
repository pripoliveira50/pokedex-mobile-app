import pokemonAnimation from './pokebola.json';

import * as S from './styles';
import { LoadingProps } from './types';

export const Loading = ({ loading }: LoadingProps) => {
  const AnimatedLottieView = require('lottie-react-native');

  return loading ? (
    <S.Container testID="loading">
      <S.IconContent>
        <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
      </S.IconContent>
      <S.Text>Loading...</S.Text>
    </S.Container>
  ) : null;
};
