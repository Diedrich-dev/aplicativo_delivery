import { View, Text } from 'react-native';
import React from 'react';

import { Header } from '../../../components/header';

export const Home = () => {
  return (
    <>
      <Header />
      <View
      style={{
        backgroundColor: 'tomato',
        flex: 1,
      }}>
        <Text>
          Home
        </Text>
      </View>
    </>
  );
}
