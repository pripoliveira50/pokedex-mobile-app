import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import {
  IPokemonsDetailsContextData,
  PokemonProviderDetailsProps,
} from './types';
import { PokemonDetailProps, TypeName } from '@screens/PokemonDetails/types';
import api from '@services/api';
import { Alert } from 'react-native';
import { theme } from '@global/index';

const PokemonDetailsContext = createContext({} as IPokemonsDetailsContextData);

function PokemonDetalisProvider({ children }: PokemonProviderDetailsProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailProps>(
    {} as PokemonDetailProps,
  );
  const [load, setLoad] = useState<boolean>(true);

  async function getPokemonDetails(pokemonId: string) {
    const pokemonDetailsPromise = await api.get(`pokemon/${pokemonId}/`);
    const pokemonEggsPromise = await api.get(`pokemon-species/${pokemonId}/`);

    Promise.all([pokemonDetailsPromise, pokemonEggsPromise])
      .then(pokemon => {
        setPokemonDetails({
          stats: pokemon[0].data.stats,
          abilities: pokemon[0].data.abilities,
          id: pokemon[0].data.id,
          name: pokemon[0].data.name,
          types: pokemon[0].data.types,
          eggs: pokemon[1].data.egg_groups,
          color:
            theme.colors.backgroundCard[
              pokemon[0].data.types[0].type.name as TypeName
            ],
        });
      })
      .catch(error =>
        Alert.alert('Ops, ocorreu um erro, tente mais tarde: ', error),
      )
      .finally(() => setLoad(false));
  }

  return (
    <PokemonDetailsContext.Provider
      value={{
        getPokemonDetails,
        pokemonDetails,
        load,
        setLoad,
      }}
    >
      {children}
    </PokemonDetailsContext.Provider>
  );
}

function useContextPokemonDetail() {
  const context = useContext(PokemonDetailsContext);
  return context;
}

export { PokemonDetalisProvider, useContextPokemonDetail };
