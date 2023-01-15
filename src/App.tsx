import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components/native';

import { theme } from '@global/index';

import '@config/ReactotronConfig';
import { PokemonProvider } from '@context/PokemonContext';
import { PokemonDetalisProvider } from '@context/PokemonDetailsContext';
import { FavoritesProvider } from '@context/FavoritesContext';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { LogBox, StatusBar } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@routes/root';
import { AppRoutes } from '@routes/app.routes';

preventAutoHideAsync();

export default function App() {
  LogBox.ignoreAllLogs();
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics}
        onLayout={onLayoutRootView}
      >
        <NavigationContainer ref={navigationRef}>
          <PokemonProvider>
            <PokemonDetalisProvider>
              <FavoritesProvider>
                <StatusBar backgroundColor="#343D64" />
                <AppRoutes />
              </FavoritesProvider>
            </PokemonDetalisProvider>
          </PokemonProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
