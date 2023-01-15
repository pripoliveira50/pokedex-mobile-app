import { useCallback, useMemo, useEffect } from 'react';

import * as S from './styles';
import { Loading } from '@components/Load';

import { useContextPokemon } from '@context/PokemonContext';
import { FadeAnimation } from '@components/FadeAnimation';
import pokedex from '@assets/img/pokedex.png';
import { FlatListPokemon } from '@components/FlatListPokemon';
import { useRoutes } from '@hooks/useRoutes';
import { ROUTES } from '@routes/types';
import { Controller, useForm } from 'react-hook-form';
import { FormData } from './types';
import { Input } from '@components/Input';

export const Home = () => {
  const {
    getPokemonList,
    pokemonList,
    PokemonSearch,
    load,
    findedPokemon,
    setFindedPokemon,
  } = useContextPokemon();
  const { navigate } = useRoutes();

  const { control, resetField, watch } = useForm<FormData>({
    mode: `all`,
    defaultValues: {
      search: ``,
    },
  });

  const search = watch(`search`);

  useEffect(() => {
    getPokemonList();
  }, []);

  const filteredList = useCallback(
    (item: string) => {
      if (item === ``) return;
      PokemonSearch(item);
      return findedPokemon;
    },
    [search, PokemonSearch, findedPokemon],
  );

  const resetPokemon = useCallback(() => {
    setFindedPokemon([]);
    resetField(`search`);
  }, [setFindedPokemon, resetField]);

  const renderPokemons = useMemo(() => {
    if (findedPokemon.length > 0) {
      return findedPokemon;
    }

    return pokemonList;
  }, [pokemonList, search, findedPokemon]);

  const renderFooter = useCallback(() => {
    return (
      <S.ContainerLoading>
        <S.Load />
      </S.ContainerLoading>
    );
  }, []);

  return (
    <>
      <S.Container>
        <Loading loading={load} />
        <S.Header>
          <S.Title>Pokédex</S.Title>
          <S.SubTitle>Choose your pokemon</S.SubTitle>
        </S.Header>
        <S.InputContainer>
          <Controller
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Search pokemon"
                maxLength={40}
                resetSearch={() => resetPokemon()}
                searchPokemon={() => filteredList(search)}
              />
            )}
            name="search"
          />
        </S.InputContainer>

        <FlatListPokemon
          data={renderPokemons}
          horizontal={true}
          loadMorePokemons={getPokemonList}
          ListFooterComponent={renderFooter}
        />

        <S.ContentFav>
          <S.TextFavorite>
            Click in pokédex to see your favorites pokémons
          </S.TextFavorite>

          <S.NavigationContainer onPress={() => navigate(ROUTES.FAVORITES)}>
            <FadeAnimation>
              <S.Image source={pokedex} />
            </FadeAnimation>
          </S.NavigationContainer>
        </S.ContentFav>
      </S.Container>
    </>
  );
};
