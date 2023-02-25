import { useEffect, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import circle from '@assets/img/circle.png';
import dots from '@assets/img/dots.png';

import * as S from './styles';

import { FadeAnimation } from '@components/FadeAnimation';
import { Loading } from '@components/Load';
import { RouteParams, Url } from './types';
import { useContextFavorite } from '@context/FavoritesContext';
import { useRoutes } from '@hooks/useRoutes';
import { usePokemoDetails } from '@services/usePokemonDetails';
import { Alert } from 'react-native';

export const PokemonDetails = () => {
  const route = useRoute();
  const { goBack, isFocused } = useRoutes();
  const { pokemonName } = route.params as RouteParams;
  const { useFetchPokemonDetails } = usePokemoDetails();
  const { getStorage } = useContextFavorite();
  const { setStorage, pokemonList } = useContextFavorite();

  const pokemonDetails = useFetchPokemonDetails(pokemonName, {
    onError: () => {
      Alert.alert(
        'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
      );
    },
  });

  useEffect(() => {
    getStorage();
  }, [pokemonName, getStorage]);

  if (!pokemonDetails.data) return;

  return (
    <>
      <Loading loading={isFocused() && pokemonDetails.isLoading} />
      <S.Header type={pokemonDetails.data.types[0].type.name}>
        <S.BackButton onPress={() => goBack()}>
          <S.Icon name="chevron-circle-left" />
        </S.BackButton>
        <S.ContentImage>
          <S.CircleImage source={circle} />
          <FadeAnimation>
            <S.PokemonImage
              source={{
                uri: `${Url}${pokemonDetails.data.id}.png`,
              }}
            />
          </FadeAnimation>
        </S.ContentImage>
        <S.Content>
          <S.ContainerPokemonText>
            <S.PokemonId>#{pokemonDetails.data.id}</S.PokemonId>
            <S.PokemonName>{pokemonDetails.data.name}</S.PokemonName>
          </S.ContainerPokemonText>
          <S.PokemonTypeContainer>
            {pokemonDetails.data?.types.map(({ type }) => (
              <S.PokemonType type={type.name} key={type.name}>
                <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
              </S.PokemonType>
            ))}
          </S.PokemonTypeContainer>

          <S.PokemonTypeContainer>
            <S.Title>Favorite this</S.Title>
            <S.Click
              onPress={() => {
                setStorage(pokemonDetails.data);
              }}
            >
              {!!pokemonList.filter(
                pokemon => pokemon.name === pokemonDetails.data.name,
              ).length ? (
                <S.Icon name={'star'} />
              ) : (
                <S.Icon name={'star-o'} />
              )}
            </S.Click>
          </S.PokemonTypeContainer>
        </S.Content>
        <S.DotsImage source={dots} />
      </S.Header>
      <S.Container>
        <S.Scroll>
          <S.Title> Base States </S.Title>
          {pokemonDetails.data.stats.map(({ base_stat, stat }) => (
            <S.StatusBar key={stat.name}>
              <S.Attributes>{stat.name}</S.Attributes>
              <S.AttributesNumber>{base_stat}</S.AttributesNumber>
              <S.ContentBar>
                <S.ProgressBar
                  type={pokemonDetails.data.types[0].type.name}
                  borderWidth={0}
                  progress={100}
                  width={base_stat}
                  color={pokemonDetails.data.color}
                />
              </S.ContentBar>
            </S.StatusBar>
          ))}
          <S.Title> Abilities </S.Title>
          {pokemonDetails.data.abilities.map(abilityItem => (
            <S.ContainerAbilities key={abilityItem.ability.name}>
              <S.Ability
                type={pokemonDetails.data.types[0].type.name}
                key={abilityItem.ability.name}
              >
                {abilityItem.ability.name}
              </S.Ability>
            </S.ContainerAbilities>
          ))}
          <S.Title> Eggs </S.Title>
          {pokemonDetails.data.eggs.map(({ name }, index) => (
            <S.ContainerAbilities key={index}>
              <S.Ability
                type={pokemonDetails.data.types[0].type.name}
                key={index}
              >
                {name}
              </S.Ability>
            </S.ContainerAbilities>
          ))}
        </S.Scroll>
      </S.Container>
    </>
  );
};
