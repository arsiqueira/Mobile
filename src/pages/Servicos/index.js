import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import imagem1 from '../../../assets/Serviços/img1.jpg';
import imagem2 from '../../../assets/Serviços/img2.jpg';
import imagem3 from '../../../assets/Serviços/img3.jpg';
import imagem4 from '../../../assets/Serviços/img4.jpg';
import imagem5 from '../../../assets/Serviços/img5.jpg';
import Notificacoes from '../../componente/notificacao';
import Perfil from '../../componente/perfil';

const lado = Dimensions.get('window');

export default function Welcome() {
  const DATA = [
    {
      CoverImageUrl: imagem1,
    },
    {
      CoverImageUrl: imagem2,
    },
    {
      CoverImageUrl: imagem3,
    },
    {
      CoverImageUrl: imagem4,
    },
    {
      CoverImageUrl: imagem5,
    },
  ];

  const renderItem = (data) => (
    <View key={data.CoverImageUrl} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image source={data.CoverImageUrl} style={styles.card} />
        <View style={[styles.cornerLabel, { backgroundColor: data.cornerLabelColor }, { color: data.color }]}>
          <Text>{data.cornerLabelText}</Text>
        </View>
      </View>
    </View>
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')} style={styles.imageBackground}>
        <StatusBar backgroundColor="#E4BBB7" barStyle='light-content' />
        <View style={styles.containerTopo}>
          <Perfil/>
          <Image source={require('../../../assets/assets/logo.png')} style={styles.img} />
          <Notificacoes/>
        </View>
        <View style={styles.Titulo}>
          <Image source={require('../../../assets/assets/icones/Serviços1.png')} style={styles.imgRec} />
          <Text style={styles.textRec}>SERVIÇOS</Text>
        </View>
        <View style={styles.containerConteudo}>
          <Carousel
            style={styles.carFoto}
            pagination={PaginationLight}
            renderItem={renderItem}
            data={DATA}
            loop
            autoplay
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Servicos')}></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9ED",
  },
  containerTopo: {
    width: '100%',
    backgroundColor: '#E4BBB7',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerConteudo: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: 30,
  },
  Titulo: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  img: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgRec: {
    resizeMode: 'stretch',
    width: 40,
    height: 40,
    marginLeft: 60,
  },
  textRec: {
    fontSize: 40,
    color: '#D07B85',
    marginLeft: 12, // Ajuste para centralizar corretamente
  },
  card: {
    width: 320,
    height: 450,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  cardWrapper: {
    borderWidth: 4,
    borderColor: '#E4BBB7',
    borderRadius: 28,
    overflow: 'hidden',
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  textoImagens: {
    paddingBottom: 20,
    fontSize: 18,
  },
  logo: {
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 4,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
});
