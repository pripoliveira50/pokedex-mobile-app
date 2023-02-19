import { useContextPokemonDetail } from '@context/PokemonDetailsContext';
import { useMemo } from 'react';

import * as S from '../styles';
import { useContextFavorite } from '@context/FavoritesContext';

const usePokemonDetails = () => {
  const { pokemonDetails } = useContextPokemonDetail();
  const { setStorage, pokemonList } = useContextFavorite();

  const renderHabilities = useMemo(() => {
    if (!pokemonDetails.abilities) return;
    return pokemonDetails.abilities.map(abilityItem => (
      <S.ContainerAbilities key={abilityItem.ability.name}>
        <S.Ability
          type={pokemonDetails.types[0].type.name}
          key={abilityItem.ability.name}
        >
          {abilityItem.ability.name}
        </S.Ability>
      </S.ContainerAbilities>
    ));
  }, [pokemonDetails]);

  const renderType = useMemo(() => {
    if (!pokemonDetails.types) return;
    return pokemonDetails.types.map(({ type }) => (
      <S.PokemonType type={type.name} key={type.name}>
        <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
      </S.PokemonType>
    ));
  }, [pokemonDetails]);

  const renderAtributes = useMemo(() => {
    if (!pokemonDetails.stats) return;
    return pokemonDetails.stats.map(({ base_stat, stat }) => (
      <S.StatusBar key={stat.name}>
        <S.Attributes>{stat.name}</S.Attributes>
        <S.AttributesNumber>{base_stat}</S.AttributesNumber>
        <S.ContentBar>
          <S.ProgressBar
            type={pokemonDetails.types[0].type.name}
            borderWidth={0}
            progress={100}
            width={base_stat}
            color={pokemonDetails.color}
          />
        </S.ContentBar>
      </S.StatusBar>
    ));
  }, [pokemonDetails]);

  const renderEggs = useMemo(() => {
    if (!pokemonDetails.eggs) return;
    return pokemonDetails.eggs.map(({ name }, index) => (
      <S.ContainerAbilities key={index}>
        <S.Ability type={pokemonDetails.types[0].type.name} key={index}>
          {name}
        </S.Ability>
      </S.ContainerAbilities>
    ));
  }, [pokemonDetails]);

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

  return {
    renderHabilities,
    renderType,
    renderAtributes,
    renderEggs,
    renderFavorite,
  };
};

export default usePokemonDetails;
