export interface IAttributes {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface IAbilitys {
  ability: {
    name: string;
  };
}

export type TypeName =
  | 'grass'
  | 'fire'
  | 'water'
  | 'poison'
  | 'normal'
  | 'bug'
  | 'flying'
  | 'electric'
  | 'ground'
  | 'fairy'
  | 'fighting'
  | 'psychic'
  | 'rock'
  | 'ghost'
  | 'steel'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'unknown'
  | 'shadow';

export type PokemonType = {
  type: {
    name: TypeName;
  };
};

export type PokemonEggs = {
  name: string;
  url: string;
};

export type PokemonDetailProps = {
  id: number;
  name: string;
  stats: IAttributes[];
  abilities: IAbilitys[];
  types: PokemonType[];
  eggs: PokemonEggs[];
  color: string;
};

export type RouteParams = {
  pokemonName: string;
};

export type TypeStyleProps = {
  type:
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'electric'
    | 'ground'
    | 'fairy'
    | 'fighting'
    | 'psychic'
    | 'rock'
    | 'ghost'
    | 'steel'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'unknown'
    | 'shadow';
};

export const Url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
