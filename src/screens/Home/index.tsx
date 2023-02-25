import * as S from './styles';
import { Loading } from '@components/Load';

import { FlatListPokemon } from '@components/FlatListPokemon';

import { Controller, useForm } from 'react-hook-form';
import { FormData } from './types';
import { Input } from '@components/Input';
import { CarouselMenu } from './components/CarouselMenu';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GetMorenInfoProps } from '@services/react-query/types';
import { usePokemonProvider } from '@services/usePokemonProvider';
import { Alert } from 'react-native';

export const Home = () => {
  const [pokemonList, setPokemonList] = useState<GetMorenInfoProps[]>([]);
  const [page, setPage] = useState(0);
  const { useSearchPokemon, useFetchPokemons } = usePokemonProvider();
  const [filterPokemon, setFilterPokemon] = useState<GetMorenInfoProps[]>([]);
  const { control, resetField, watch } = useForm<FormData>({
    mode: `all`,
    defaultValues: {
      search: ``,
    },
  });

  const pokemons = useFetchPokemons(page, {
    onError: () => {
      Alert.alert(
        'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
      );
    },
  });

  const search = watch(`search`);

  const searchPokemons = useSearchPokemon(search.toLocaleLowerCase(), {
    onSuccess(data) {
      if (!data && data === undefined) return;
      setFilterPokemon(data);
    },
    onError: () => {
      Alert.alert(
        'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
      );
    },
  });

  useEffect(() => {
    if (!pokemons.data) return;
    [pokemons.data]
      ? setPokemonList([
          ...pokemonList,
          ...(pokemons.data as GetMorenInfoProps[]),
        ])
      : null;
  }, [pokemons.data]);

  const getMorePokemons = useCallback(() => {
    setPage(oldValue => oldValue + 20);
  }, []);

  const renderPokemons = useMemo(() => {
    if (filterPokemon.length > 0 && filterPokemon[0] !== undefined) {
      console.log(filterPokemon);
      return filterPokemon;
    }
    return pokemonList;
  }, [pokemonList, filterPokemon]);

  const resetPokemon = useCallback(() => {
    setFilterPokemon([]);
    resetField(`search`);
  }, [resetField, filterPokemon]);

  const renderInput = useMemo(() => {
    return (
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
            searchPokemon={() => searchPokemons.refetch()}
          />
        )}
        name="search"
      />
    );
  }, [control, filterPokemon]);

  return (
    <>
      <S.Container>
        <Loading loading={pokemons.isLoading || searchPokemons.isLoading} />
        <S.Header>
          <S.Title>Pokédex</S.Title>
        </S.Header>
        <CarouselMenu />
        <S.InputContainer>{renderInput}</S.InputContainer>
        <FlatListPokemon
          data={renderPokemons}
          loadMorePokemons={getMorePokemons}
          horizontal
        />
      </S.Container>
    </>
  );
};
