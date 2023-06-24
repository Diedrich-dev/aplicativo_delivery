import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Tab/Home';
import { Wallet } from '../screens/Tab/Wallet';
import { Carrinho } from '../screens/Tab/Carrinho';
import { Settings } from '../screens/Tab/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

export const TapRoutes = () => {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        //escolher se aparece o titulo nos icons da tap
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#AAA',
        tabBarStyle: {
          margin: 10,
          borderRadius: 20,
          paddingBottom: 5,
          borderTopWidth: 0,
          backgroundColor: '#F5F5F5',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          shadowOpacity: 0.2,
        },
      }}>
      <Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                marginTop: 5,
              }}
            >
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={22}
                color={color}
              />
            </View>
          )
        }}
      />
      <Screen
        name='Wallet'
        component={Wallet}
        options={{
          title: 'Cartão',
          tabBarIcon: ({color, focused}) => (
            <View style= {{marginTop: 5}}>
              <Ionicons
                name={focused ? "card-sharp" : "card-outline"}
                size={22}
                color={color}
              />
            </View>
          )
        }}
      />
      <Screen
        name='Carrinho'
        component={Carrinho}
        options={{
          title: 'Carrinho',
          tabBarIcon: ({color, focused}) => (
            <View style={{marginTop: 5}}>
              <Ionicons
                name={focused ? "cart-sharp" : "cart-outline"}
                size={22}
                color={color}
              />
            </View>
          )
        }}
      />
      <Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Ajustes',
          tabBarIcon: ({color, focused}) => (
            <View style={{marginTop: 5}}>
              <Ionicons
                name={focused ? "settings-sharp": "settings-outline"}
                size={22}
                color={color}
              />
            </View>
          )
        }}
      />
    </Navigator>
  );
}