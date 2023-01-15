import dotsImage from '@assets/img/dots.png';

import { FadeAnimation } from '@components/FadeAnimation';
import { CardProps, Url } from './types';

import * as S from './styles';

export const Card = ({ data, ...rest }: CardProps) => {
  return (
    <S.PokemonCard
      testID="card"
      style={S.styles.shadowCard}
      type={data.types[0].type.name}
      {...rest}
    >
      <FadeAnimation>
        <S.PokemonImage
          testID="card-image-pokemon"
          source={{
            uri: `${Url}${data.id}.png`,
          }}
        />
        <S.ImageCardFrame source={dotsImage} />
        <S.ContainerPokemonText>
          <S.PokemonId testID="card-id">#{data.id}</S.PokemonId>
          <S.PokemonName testID="card-name">{data.name}</S.PokemonName>
        </S.ContainerPokemonText>

        <S.ContainerPokemonType>
          {data.types.map(pokemonType => (
            <S.PokemonType key={pokemonType.type.name}>
              <S.PokemonTypeText
                testID="card-type-name"
                key={pokemonType.type.name}
              >
                {pokemonType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.ContainerPokemonType>
      </FadeAnimation>
    </S.PokemonCard>
  );
};
