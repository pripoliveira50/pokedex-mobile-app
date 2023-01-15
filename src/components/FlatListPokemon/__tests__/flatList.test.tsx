import { fireEvent, render } from '@testing-library/react-native';

import { FlatListPokemon } from '..';

import { useCardProvider } from '@hooks/useTestProviders';
import { navigate } from '../../../routes/root/index';
import { ROUTES } from '@routes/types';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('@hooks/useRoutes', () => ({
  useRoutes: () => ({
    navigate: jest.fn(),
  }),
}));

const data = [
  {
    id: 1,
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
    name: 'Bulbasaur',
    types: [
      {
        type: {
          name: 'grass',
        },
      },
    ],
  },
];

const navigateDetailsPokemon = jest.fn((pokemonName: string) =>
  navigate(ROUTES.POKEMON_DETAILS, pokemonName),
);

describe('FlatListPokemon', () => {
  it('should render FlatListPokemon with data', () => {
    const { getByTestId } = render(<FlatListPokemon data={data} />, {
      wrapper: useCardProvider,
    });
    expect(getByTestId('flatlist-pokemon').props.renderItem.length).toBe(1);
  });

  it('should call navigate when onPress is called', async () => {
    const { findByText } = render(<FlatListPokemon data={data} />, {
      wrapper: useCardProvider,
    });

    const click = await findByText('Bulbasaur');

    fireEvent.press(click, navigateDetailsPokemon('Bulbasaur'));
    expect(navigateDetailsPokemon).toBeCalled();

    expect(navigateDetailsPokemon).toBeCalledWith('Bulbasaur');

    expect(navigateDetailsPokemon).toBeCalledTimes(1);
  });

  it('should render empty component', () => {
    const { getByTestId } = render(<FlatListPokemon data={[]} />, {
      wrapper: useCardProvider,
    });

    expect(getByTestId('flatlist-empty').props.children).toEqual(
      'There are no pokemons in this list',
    );
  });

  it('should data be empty', () => {
    const { getByTestId } = render(<FlatListPokemon data={[]} />, {
      wrapper: useCardProvider,
    });

    expect(getByTestId('flatlist-pokemon').props.data.length).toEqual(0);
  });

  it('should render FlatListPokemon with data', () => {
    const { getByTestId } = render(<FlatListPokemon data={data} />, {
      wrapper: useCardProvider,
    });

    expect(getByTestId('flatlist-pokemon').props.data.length).toEqual(1);

    expect(getByTestId('flatlist-pokemon').props.data[0].name).toEqual(
      'Bulbasaur',
    );

    expect(getByTestId('flatlist-pokemon').props.data[0].id).toEqual(1);

    expect(getByTestId('flatlist-pokemon').props.data[0].url).toEqual(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
    );

    expect(
      getByTestId('flatlist-pokemon').props.data[0].types[0].type.name,
    ).toEqual('grass');
  });

  it('should render footer component', () => {
    const { getByTestId } = render(
      <FlatListPokemon data={data} ListFooterComponent={<></>} />,
      {
        wrapper: useCardProvider,
      },
    );

    expect(
      getByTestId('flatlist-pokemon').props.ListFooterComponent,
    ).toBeDefined();
  });

  it('should render FlatListPokemon with horizontal', () => {
    const { getByTestId } = render(<FlatListPokemon data={data} horizontal />, {
      wrapper: useCardProvider,
    });

    expect(getByTestId('flatlist-pokemon').props.horizontal).toBeTruthy();
  });
});
