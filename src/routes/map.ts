import { ROUTES } from './types';

export type Routes = {
  [ROUTES.WELCOME]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.FAVORITES]: undefined;
  [ROUTES.POKEMON_DETAILS]: {
    pokemonName: string;
  };
};
