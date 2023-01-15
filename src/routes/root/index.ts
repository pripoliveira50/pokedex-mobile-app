import { createNavigationContainerRef } from '@react-navigation/native';

import { RouteMap } from '@routes/map';

export const navigationRef = createNavigationContainerRef<keyof RouteMap>();

export const navigate = <T>(name: keyof RouteMap, params?: T): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, (params ?? {}) as never);
  }
};
