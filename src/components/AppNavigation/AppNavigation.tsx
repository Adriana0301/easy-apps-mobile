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
import TabsScreen from '../../screens/TabsScreen/TabsScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {

  const {accessToken} = useAuth();

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
          <AppStack.Screen
            name={ERouteNames.TABS_SCREEN}
            component={TabsScreen}
          />
        </AppStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
