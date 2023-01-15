import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import { Welcome } from '@screens/Welcome';

import { PokemonDetails } from '@screens/PokemonDetails';
import { FavoritesPokemonPage } from '@screens/Favorites';

import { Routes } from './map';
import { ROUTES } from './types';

export const Stack = createStackNavigator<Routes>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.WELCOME}
    >
      <Stack.Screen name={ROUTES.WELCOME} component={Welcome} />
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.POKEMON_DETAILS} component={PokemonDetails} />
      <Stack.Screen name={ROUTES.FAVORITES} component={FavoritesPokemonPage} />
    </Stack.Navigator>
  );
}
