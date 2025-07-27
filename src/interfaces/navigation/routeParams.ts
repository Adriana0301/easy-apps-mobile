import { NavigationProp } from '@react-navigation/native';
import { ERouteNames } from './routeNames';

export type AuthStackParamList = {
  [ERouteNames.SIGN_IN_SCREEN]: undefined;
  [ERouteNames.SIGN_UP_SCREEN]: undefined;
};

export type AppStackParamList = {
  [ERouteNames.TABS_SCREEN]: undefined; // NavigatorScreenParams<TabsStackParamList>;
  [ERouteNames.TASKS_SCREEN]: undefined; // {taskId: number}
  [ERouteNames.CURRENT_USER]: undefined;
  [ERouteNames.COMMON_TASKS_SCREEN]: undefined; // {taskId: number}
};

export type TabsStackParamList = {
  [ERouteNames.TASKS_SCREEN]: undefined;
  [ERouteNames.CURRENT_USER]: undefined;
  [ERouteNames.COMMON_TASKS_SCREEN]: undefined;
};


export type AuthNavigationParams = NavigationProp<AuthStackParamList>;
