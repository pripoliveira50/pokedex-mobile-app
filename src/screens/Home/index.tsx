import * as S from './styles';
import { Loading } from '@components/Load';

import { FlatListPokemon } from '@components/FlatListPokemon';

import { Controller, useForm } from 'react-hook-form';
import { FormData } from './types';
import { Input } from '@components/Input';
import { CarouselMenu } from './components/CarouselMenu';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GetMorenInfoProps } from '@services/react-query/types';
import { useQuery } from 'react-query';
import { usePokemonProvider } from './hooks';
import { Alert } from 'react-native';
import { keyFetchPokemons } from '@services/react-query/keys';
import { keySearchPokemon } from '../../services/react-query/keys';

export const Home = () => {
  const [pokemonList, setPokemonList] = useState<GetMorenInfoProps[]>([]);
  const [page, setPage] = useState(0);
  const { fetchPokemons, searchPokemon } = usePokemonProvider();
  const [filterPokemon, setFilterPokemon] = useState<GetMorenInfoProps[]>([]);
  const [filter, setFilter] = useState(``);
  const { control, resetField, watch } = useForm<FormData>({
    mode: `all`,
    defaultValues: {
      search: ``,
    },
  });

  const pokemons = useQuery(keyFetchPokemons(page), () => fetchPokemons(page), {
    onError: () => {
      Alert.alert(
        'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
      );
    },
  });

  const { data } = useQuery(
    keySearchPokemon(filter),
    () => searchPokemon(filter.toLocaleLowerCase()),
    {
      enabled: !!filter,
      onSuccess() {
        if (!data && data === undefined) return;
        setFilterPokemon(data);
      },
      onError: () => {
        Alert.alert(
          'Ops, ocorreu um erro ao buscar os pokemons, tente novamente.',
        );
      },
    },
  );

  const renderPokemons = useMemo(() => {
    if (filterPokemon.length > 0) {
      return filterPokemon;
    }
    return pokemonList;
  }, [pokemonList, filterPokemon]);

  useEffect(() => {
    [pokemons.data] &&
      setPokemonList([
        ...pokemonList,
        ...(pokemons.data as GetMorenInfoProps[]),
      ]);
  }, [pokemons.data]);

  const getMorePokemons = useCallback(() => {
    setPage(oldValue => oldValue + 20);
  }, []);

  const resetPokemon = useCallback(() => {
    setFilterPokemon([]);
    setFilter(``);
    resetField(`search`);
  }, [resetField, filterPokemon]);

  console.log(filterPokemon, 'a');

  return (
    <>
      <S.Container>
        <Loading loading={pokemons.isLoading} />
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
                searchPokemon={() => setFilter(value)}
              />
            )}
            name="search"
          />
        </S.InputContainer>
        <FlatListPokemon
          data={renderPokemons}
          loadMorePokemons={getMorePokemons}
          horizontal
        />
      </S.Container>
    </>
  );
};
