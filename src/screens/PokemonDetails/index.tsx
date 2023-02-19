import { useCallback, useEffect, useMemo } from 'react';
import { useRoute, useFocusEffect } from '@react-navigation/native';

import circle from '@assets/img/circle.png';
import dots from '@assets/img/dots.png';

import * as S from './styles';

import { FadeAnimation } from '@components/FadeAnimation';
import { Loading } from '@components/Load';
import { RouteParams, Url } from './types';
import { useContextPokemonDetail } from '@context/PokemonDetailsContext';
import { useContextFavorite } from '@context/FavoritesContext';
import usePokemonDetails from './hooks';
import { useRoutes } from '@hooks/useRoutes';

export const PokemonDetails = () => {
  const route = useRoute();
  const { goBack } = useRoutes();
  const { pokemonName } = route.params as RouteParams;
  const { getPokemonDetails, pokemonDetails, load } = useContextPokemonDetail();
  const { setStorage, pokemonList, getStorage, favLoad } = useContextFavorite();
  const { renderHabilities, renderType, renderAtributes, renderEggs } =
    usePokemonDetails();

  useEffect(() => {
    getPokemonDetails(pokemonName);
    getStorage();
  }, [pokemonName, getStorage]);

  const renderFavorite = useMemo(() => {
    return (
      <S.PokemonTypeContainer>
        <S.Title>Favorite this</S.Title>
        <S.Click
          onPress={() => {
            setStorage(pokemonDetails);
          }}
        >
          {!!pokemonList.filter(pokemon => pokemon.name === pokemonDetails.name)
            .length ? (
            <S.Icon name={'star'} />
          ) : (
            <S.Icon name={'star-o'} />
          )}
        </S.Click>
      </S.PokemonTypeContainer>
    );
  }, [pokemonDetails, pokemonList]);

  if (Object.keys(pokemonDetails).length === 0) {
    return;
  }

  return (
    <>
      <Loading loading={load && favLoad} />

      <S.Header type={pokemonDetails.types[0].type.name}>
        <S.BackButton onPress={() => goBack()}>
          <S.Icon name="chevron-circle-left" />
        </S.BackButton>
        <S.ContentImage>
          <S.CircleImage source={circle} />
          <FadeAnimation>
            <S.PokemonImage
              source={{
                uri: `${Url}${pokemonDetails.id}.png`,
              }}
            />
          </FadeAnimation>
        </S.ContentImage>
        <S.Content>
          <S.ContainerPokemonText>
            <S.PokemonId>#{pokemonDetails.id}</S.PokemonId>
            <S.PokemonName>{pokemonDetails.name}</S.PokemonName>
          </S.ContainerPokemonText>
          <S.PokemonTypeContainer>{renderType}</S.PokemonTypeContainer>
          {renderFavorite}
        </S.Content>
        <S.DotsImage source={dots} />
      </S.Header>
      <S.Container>
        <S.Scroll>
          <S.Title> Base States </S.Title>
          {renderAtributes}
          <S.Title> Abilities </S.Title>
          {renderHabilities}
          <S.Title> Eggs </S.Title>
          {renderEggs}
        </S.Scroll>
      </S.Container>
    </>
  );
};
