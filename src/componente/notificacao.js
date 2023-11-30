import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import VideoScreen from './conteudoVideo';

const Notificacoes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagemNotificacao, setMensagemNotificacao] = useState('');
  const navigation = useNavigation();

  const handleNotificacao = (mensagem) => {
    setMensagemNotificacao(mensagem);
    setModalVisible(true);
  };

  const handleAbrirTela = () => {
    navigation.navigate('VideoScreen');
    setModalVisible(true);
  };

  const handleFecharTela = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.notificacaoContainer}>
      <TouchableOpacity onPress={() => handleNotificacao('')}>
        <FontAwesome name="bell" size={22} color="#FDF9ED" style={styles.sininhoIcon} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.fecharButton}>
            <FontAwesome name="times" size={30} color="#e4bbb7" />
          </TouchableOpacity>

          <View style={styles.notificacaoModalContent}>
            <View style={styles.notificacaoTextoContainer}>
              <Text style={styles.notificacaoMensagemModal}>{mensagemNotificacao}</Text>
              <Text style={styles.textRec}>NOTIFICAÇÕES</Text>
              <View style={styles.linha} />
              <TouchableOpacity onPress={handleAbrirTela}>
                <Text style={styles.tituloNotificacoes}>🎉 Veja o resultado dessa unha 🎉</Text>
                <Image
                  source={require('../../assets/assets/visuUnha.jpg')}
                  style={styles.imagemVideoModal}
                />
              </TouchableOpacity>
              <View style={styles.linha} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textRec: {
    fontSize: 30,
    color: '#D07B85',
    marginTop: -65,
    alignSelf: 'center',
    marginBottom: 10,
  },
  linha: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 25,
    marginTop: 7,
  },
  notificacaoContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
  sininhoIcon: {
    marginTop: -35,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FDF9ED',
    paddingTop: 50,
  },
  fecharButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  notificacaoModalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  notificacaoTextoContainer: {
    flex: 1,
  },
  notificacaoMensagemModal: {
    fontSize: 20,
    marginBottom: 10,
  },
  imagemVideoModal: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: '80%',
    marginTop: -40,
  },
  tituloNotificacoes: {
    fontSize: 18,
    color: '#D07B85',
  },
});

export default Notificacoes;
