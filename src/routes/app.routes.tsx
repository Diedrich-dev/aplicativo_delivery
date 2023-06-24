import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TapRoutes } from './tap.routes';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
    initialRouteName='TabRoutes'
    screenOptions={{
      headerShown: false,
    }}>
      <Screen name='TabRouter' component={TapRoutes}></Screen>
    </Navigator>
  );
}