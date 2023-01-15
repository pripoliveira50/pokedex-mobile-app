import useNavigationDirectPath from '@react-navigation/core/src/useNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

import { Routes } from '@routes/map';

export const useRoutes = (): StackNavigationProp<Routes, keyof Routes> => {
  return useNavigationDirectPath();
};
