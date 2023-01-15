import { render } from '@testing-library/react-native';
import { FavoritesPokemonPage } from '..';
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { useFavoriteProvider } from '../../../hooks/useTestProviders/index';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const mockGoBack = jest.fn();

jest.mock('@hooks/useRoutes', () => ({
  useRoutes: () => ({
    goBack: mockGoBack,
  }),
}));

const setStateMock = jest.fn();
const useStateMock: any = (useState: any) => [useState, setStateMock];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);

describe('FavoritesPokemonPage', () => {
  it('should render Favorite with title', () => {
    const { getByTestId } = render(<FavoritesPokemonPage />, {
      wrapper: useFavoriteProvider,
    });

    expect(getByTestId('favorite-title').props.children).toBe('Favorites');
  });

  it('should render Favorite with empty list', () => {
    const { getByTestId } = render(<FavoritesPokemonPage />, {
      wrapper: useFavoriteProvider,
    });

    expect(getByTestId('flatlist-pokemon').props.data.length).toBe(0);
    expect(
      getByTestId('flatlist-pokemon').props.ListEmptyComponent().props.children,
    ).toBeTruthy();
  });

  it('should render Favorite with back button icon', async () => {
    const { findByTestId } = render(<FavoritesPokemonPage />, {
      wrapper: useFavoriteProvider,
    });

    const backPress = await findByTestId('favorite-back-button-icon');

    fireEvent.press(backPress, mockGoBack());

    expect(mockGoBack).toBeCalled();
  });
});
