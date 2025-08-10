import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import {
  AppStackParamList,
  AuthStackParamList,
} from '../../interfaces/navigation/routeParams';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen/SingUpScreen';
import TaskCreatorScreen from '../../screens/TaskCreatorScreen/TaskCreatorScreen';
import TasksDetailsScreen from '../../screens/TaskDetailsScreen/TaskDetailsScreen';
import TaskEditorScreen from '../../screens/TaskEditorScreen/TaskEditorScreen';
import Tabs from '../Tabs/Tabs';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const { accessToken } = useAuth();

  return (
    <NavigationContainer>
      {!accessToken ? (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen
            name={ERouteNames.SIGN_IN_SCREEN}
            component={SignInScreen}
          />
          <AuthStack.Screen
            name={ERouteNames.SIGN_UP_SCREEN}
            component={SignUpScreen}
          />
        </AuthStack.Navigator>
      ) : (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name={ERouteNames.TABS_SCREEN} component={Tabs} />
          <AppStack.Screen
            name={ERouteNames.TASK_CREATOR}
            component={TaskCreatorScreen}
          />
          <AppStack.Screen
            name={ERouteNames.TASK_EDITOR}
            component={TaskEditorScreen}
          />
          <AppStack.Screen
            name={ERouteNames.TASK_DETAILS}
            component={TasksDetailsScreen}
          />
        </AppStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
