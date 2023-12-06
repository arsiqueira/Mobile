import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import Calendario from '../../componente/calendario';
import Select from '../../componente/select';
import Notificacoes from '../../componente/notificacao';
import Perfil from '../../componente/perfil';
import { useNavigation } from '@react-navigation/native';  // Importando useNavigation

export default function Welcome() {
  const Separator = () => {
    return <View style={styles.separator} />;
  };

  const navigation = useNavigation();  // Obtendo a instância de navegação

  const handleAgendarPress = () => {
    navigation.navigate('Agendar');  // Navegando para a página 'Agendar'
    console.log("Botão Agendar pressionado!");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')} style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <StatusBar backgroundColor="#E4BBB7" barStyle='light-content' />
          <View style={styles.containerTopo}>
            <Perfil/>
            <Image source={require('../../../assets/assets/logo.png')} style={styles.img} />
            <Notificacoes/>
          </View>

          <View style={styles.containerConteudo}>
            <Image source={require('../../../assets/assets/icones/clock.png')} style={styles.imgRec} />
            <Text style={styles.textRec}>AGENDAMENTO</Text>
            <Calendario />
            <TextInput
              placeholder='Data e Hora'
              style={styles.input}
            />

            <Text style={styles.textSel}>Selecione o procedimento</Text>

            <Select />
            <Separator />

            {/* Botão Agendar */}
            <TouchableOpacity
              style={styles.buttonAgendar}
              onPress={handleAgendarPress}
            >
              <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9ED',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  containerTopo: {
    backgroundColor: '#E4BBB7',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  img: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageBackground: {
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
  imgRec: {
    resizeMode: 'stretch',
    width: 35,
    height: 35,
    marginLeft: 25,
    marginTop: 25,
  },
  textRec: {
    fontSize: 35,
    color: '#D07B85',
    marginTop: -40,
    marginLeft: 70,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4BBB7',
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: '#E4BBB7',
  },
  textSel: {
    fontSize: 25,
    color: '#D07B85',
    marginTop: 6,
    marginLeft: 0,
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 20,
    marginTop: -6,
    borderBottomColor: '#D07B85',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonAgendar: {
    backgroundColor: '#D07B85',
    padding: 15,
    borderRadius: 10,
    marginTop: -10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
