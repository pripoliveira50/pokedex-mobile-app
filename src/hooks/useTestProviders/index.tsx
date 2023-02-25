import { theme } from '@global/index';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@routes/root';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { FavoritesProvider } from '@context/FavoritesContext';

interface IProviderProps {
  children: React.ReactNode;
}

jest.mock('@hooks/useRoutes');

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

export const useFavoriteProvider: React.FC<IProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FavoritesProvider>
      <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
    </FavoritesProvider>
  </ThemeProvider>
);

export const useHomeProvider: React.FC<IProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
  </ThemeProvider>
);

export const useCardProvider: React.FC<IProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FavoritesProvider>
      <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
    </FavoritesProvider>
  </ThemeProvider>
);

export const usePokemonDetailsProvider: React.FC<IProviderProps> = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    <FavoritesProvider>
      <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
    </FavoritesProvider>
  </ThemeProvider>
);
