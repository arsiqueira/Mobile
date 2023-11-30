import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Notificacoes from '../../componente/notificacao';

export default function Contato() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E4BBB7" barStyle="light-content" />
      <ImageBackground source={require('../../../assets/fundo.png')} style={styles.backgroundImage}>
        <View style={styles.containerTopo}>
          <Image source={require('../../../assets/assets/logo.png')} style={styles.img} />
          <Notificacoes/>
        </View>

        <View style={styles.containerConteudo}>
          <Image source={require('../../../assets/assets/icones/iconContato.png')} style={styles.imgCont} />
          <Text style={styles.textCont}>CONTATO</Text>

          <Image source={require('../../../assets/assets/icones/iconWhats.png')} style={styles.imgWhats} />
          <TouchableOpacity style={styles.buttonWhats} onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.buttonText}>WHATSAPP</Text>
          </TouchableOpacity>

          <Image source={require('../../../assets/assets/icones/iconEmail.png')} style={styles.imgEmail} />
          <TouchableOpacity style={styles.buttonMail} onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.buttonText2}>EMAIL</Text>
          </TouchableOpacity>

          <Image source={require('../../../assets/assets/icones/iconInsta.png')} style={styles.imgInsta} />
          <TouchableOpacity style={styles.buttonInsta} onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.buttonText2}>INSTAGRAM</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9ED',
  },
  containerTopo: {
    backgroundColor: '#E4BBB7',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',// Adjust the height as needed
  },
  img: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  containerConteudo: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  imgCont: {
    resizeMode: 'stretch',
    width: 60,
    height: 40,
    marginLeft: 40,
    marginTop: 50,
  },
  textCont: {
    height: 60,
    fontStyle: 'normal',
    fontSize: 40,
    color: '#E4BBB7',
    marginTop: -50,
    marginLeft: 110
  },
  imgWhats: {
    resizeMode: 'stretch',
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop: 100,
  },
  buttonWhats: {
    position: 'absolute',
    backgroundColor: '#E4BBB7',
    borderRadius: 10,
    paddingVertical: 8,
    width: '50%',
    bottom: '65%',
    marginLeft: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgEmail: {
    resizeMode: 'stretch',
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonMail: {
    position: 'absolute',
    backgroundColor: '#E4BBB7',
    borderRadius: 10,
    paddingVertical: 8,
    width: '50%',
    marginLeft: '35%',
    bottom: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  imgInsta: {
    resizeMode: 'stretch',
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop: 50,
  },
  buttonInsta: {
    position: 'absolute',
    backgroundColor: '#E4BBB7',
    borderRadius: 10,
    paddingVertical: 8,
    width: '50%',
    marginLeft: '35%',
    bottom: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
