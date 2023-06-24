import { View, Text, Image, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://github.com/Diedrich-dev.png'
          }}
          style={styles.images}
        />
        <View style={styles.infoUser}>
          <Text style={styles.welcome}>
            Seja bem-vindo
          </Text>
          <Text style={styles.name}>
            Pedro Henrique Diedrich
          </Text>
        </View>

        <Pressable style={styles.buttonIcon}
          onPress={() => Alert.alert('Pesquisar', 'clicou na notão de pesquisa')}>
          <Ionicons name='search' size={24} color={'black'} />
        </Pressable>
      </View>
    </View>

  )
}

