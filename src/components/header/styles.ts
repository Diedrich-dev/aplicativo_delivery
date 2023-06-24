import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },

  content: {
    padding: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoUser: {
    flex: 1,
    marginLeft: 10,
  },

  images: {
    width: 50,
    height: 50,
    //sempre colocar metade do tamanho da imagem
    borderRadius: 35
  },

  welcome: {
    fontSize: 14,
    color: '#888',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonIcon: {
    padding: 5,
    borderRadius: 50,
  },
})