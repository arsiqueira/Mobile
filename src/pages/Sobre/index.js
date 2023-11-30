import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Notificacoes from '../../componente/notificacao';

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../../../assets/fundo.png')} style={styles.imageBackground}>
      <StatusBar backgroundColor="#E4BBB7" barStyle="light-content" />
      <View style={styles.containerTopo}>
        <Image source={require('../../../assets/assets/logo.png')} style={styles.img} />
        <Notificacoes/>
      </View>

      <View style={styles.containerConteudo}>
        <Image source={require('../../../assets/assets/icones/iconi.png')} style={styles.imgRec} />
        <Text style={styles.textRec}>SOBRE A EMPRESA</Text>
        <Image source={require('../../../assets/assets/sobre_img.jpg')} style={styles.imgm} />
        <Text style={styles.title}>
          A empresa Marcia Manicure surgiu através de um sonho de criança. Em 2014, foi possível
          realizar e concretizar esse sonho. O atendimento oferecido é personalizado e atencioso,
          sempre pronto para atender às necessidades dos clientes.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  containerTopo: {
    backgroundColor: '#E4BBB7',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    // Definindo uma altura fixa
  },
  img: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgm: {
    width: 220,
    height: 300,
    borderRadius: 190,
    borderWidth: 4,
    marginTop: 40,
    borderColor: '#D07B85',
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerConteudo: {
    flex: 150,
    borderButtomLeftRadius: 25,
    borderButtomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  imgRec: {
    resizeMode: 'stretch',
    width: 35,
    height: 35,
    marginLeft: 25,
    marginTop: 25,
  },
  textRec: {
    fontStyle: 'normal',
    fontSize: 33,
    color: '#D07B85',
    marginTop: -38,
    marginLeft: 65,
  },
  contBor: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#E4BBB7',
    borderRadius: 28,
    padding: 10,
    backgroundColor: '#FDF9ED',
    width: '95%',
    height: '30%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    alignItems: 'stretch',
    marginRight: 15,
    marginLeft: 15,
  },
});
