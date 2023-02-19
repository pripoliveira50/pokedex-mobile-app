import { useCallback, useMemo, useEffect } from 'react';

import * as S from './styles';
import { Loading } from '@components/Load';

import { useContextPokemon } from '@context/PokemonContext';
import { FlatListPokemon } from '@components/FlatListPokemon';

import { Controller, useForm } from 'react-hook-form';
import { FormData } from './types';
import { Input } from '@components/Input';
import { View } from 'react-native';
import { CarouselMenu } from './components/CarouselMenu';

export const Home = () => {
  const {
    getPokemonList,
    pokemonList,
    PokemonSearch,
    load,
    findedPokemon,
    setFindedPokemon,
  } = useContextPokemon();

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
        </S.Header>
        <CarouselMenu />
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
          loadMorePokemons={getPokemonList}
          ListFooterComponent={renderFooter}
          horizontal
        />
      </S.Container>
    </>
  );
};
