import { AnimatedLottieView } from '@global/animated-lottieview';
import pokemonAnimation from './pokebola.json';

import * as S from './styles';
import type { LoadingProps } from './types';

export const Loading = ({ loading }: LoadingProps) => {
  
  return loading ? (
    <S.Container testID="loading">
      <S.IconContent>
        <AnimatedLottieView
          source={pokemonAnimation}
          style={{ width: "100%", height: "50%" }}
          autoPlay
          loop
        />
      </S.IconContent>
      <S.Text>Loading...</S.Text>
    </S.Container>
  ) : null;
};
