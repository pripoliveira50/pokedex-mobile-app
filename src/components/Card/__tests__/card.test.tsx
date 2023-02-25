import { render } from '@testing-library/react-native';

import { Card } from '../index';
import { useCardProvider } from '../../../hooks/useTestProviders/index';
import { PokemonPayloadProps } from '@services/react-query/types';

jest.mock('@assets/img/dots.png', () => 'dots.png');
jest.mock('@assets/img/pokeball.png', () => 'pokeball.png');

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

const data: PokemonPayloadProps = {
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
};

describe('Card', () => {
  it('should render card with pokemon image', () => {
    const { getByTestId } = render(<Card data={data} />, {
      wrapper: useCardProvider,
    });
    expect(getByTestId('card-image-pokemon').props.source.uri).toBe(
      `${data.url}${data.id}.png`,
    );
  });

  it('should render card with pokemon id', () => {
    const { getByTestId } = render(<Card data={data} />, {
      wrapper: useCardProvider,
    });
    expect(getByTestId('card-id').props.children).toContain(data.id);
  });
  it('should render card with pokemon name', () => {
    const { getByTestId } = render(<Card data={data} />, {
      wrapper: useCardProvider,
    });
    expect(getByTestId('card-name').props.children).toBe(data.name);
  });

  it('should render card with pokemon type', () => {
    const { getByTestId } = render(<Card data={data} />, {
      wrapper: useCardProvider,
    });
    expect(getByTestId('card-type-name').props.children).toBe(
      data.types[0].type.name,
    );
  });
});
