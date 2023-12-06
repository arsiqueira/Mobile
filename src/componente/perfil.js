import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();
  const [imagemPerfil, setImagemPerfil] = useState(null);
  const [cameraAberta, setCameraAberta] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [temPermissao, setTemPermissao] = useState(null);
  const [lixeiraVisivel, setLixeiraVisivel] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setTemPermissao(status === 'granted');
    })();
  }, []);

  const handleSelecionarImagemPerfil = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'Precisamos da permissão para acessar sua galeria de fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const assetSelecionado = result.assets[0];
      setImagemPerfil(assetSelecionado.uri);
      setLixeiraVisivel(true);
    }
  };

  const handleRemoverFotoPerfil = () => {
    setImagemPerfil(null);
    setLixeiraVisivel(false);
  };

  const handleTirarFotoPerfil = () => {
    setCameraAberta(true);
    setLixeiraVisivel(false);
  };

  const alternarCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleConfirmarFoto = async () => {
    if (cameraRef.current) {
      const foto = await cameraRef.current.takePictureAsync();
      setImagemPerfil(foto.uri);
      setCameraAberta(false);
      setLixeiraVisivel(true);
    }
  };

  if (temPermissao === null) {
    return <View />;
  }

  if (temPermissao === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  const menuItems = [
    { key: 'informacoes', label: 'Minhas informações', onPress: () => console.log('Minhas informações') },
    { key: 'agendamentos', label: 'Meus agendamentos', onPress: () => console.log('Meus agendamentos') },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisivel(true)}>
        <FontAwesome name="user" size={23} color="#FDF9ED" style={styles.Icon} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisivel(false)} style={styles.fecharModalButton}>
            <FontAwesome name="times" size={30} color="#e4bbb7" />
          </TouchableOpacity>

          {!cameraAberta ? (
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={handleSelecionarImagemPerfil}>
                <View style={styles.avatarContainer}>
                  {imagemPerfil ? (
                    <>
                      <Image source={{ uri: imagemPerfil }} style={styles.avatar} />
                      {lixeiraVisivel && (
                        <TouchableOpacity onPress={handleRemoverFotoPerfil} style={styles.lixeiraIcon}>
                          <FontAwesome name="trash" size={20} color="#e4bbb7" />
                        </TouchableOpacity>
                      )}
                    </>
                  ) : (
                    <Text style={styles.avatarPlaceholder}>Adicionar Foto</Text>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleTirarFotoPerfil} style={styles.cameraIconContainer}>
                <FontAwesome name="camera" size={30} color="#666" />
              </TouchableOpacity>

              {/* Botões fictícios */}
              {menuItems.map((item) => (
                <TouchableOpacity key={item.key} onPress={item.onPress} style={styles.menuItem}>
                  <Text style={styles.menuItemText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
              {/* Fim dos botões fictícios */}

              {/* Botão "Sair" */}
              <TouchableOpacity onPress={() => { setModalVisivel(false); navigation.navigate('Welcome'); }} style={styles.sairButton}>
                <Text style={styles.sairButtonText}>Sair</Text>
              </TouchableOpacity>
              {/* Fim do botão "Sair" */}
            </View>
          ) : (
            <Camera style={styles.camera} type={cameraType} ref={cameraRef} ratio="4:3">
              <View style={styles.cameraOverlay}>
                <TouchableOpacity onPress={() => setCameraAberta(false)} style={styles.fecharCameraButton}>
                  <FontAwesome name="times" size={30} color="#e4bbb7" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirmarFoto} style={styles.tirarFotoButton}>
                  <View style={styles.tirarFotoIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={alternarCamera} style={styles.alternarCameraButton}>
                  <FontAwesome name="refresh" size={30} color="#e4bbb7" />
                </TouchableOpacity>
              </View>
            </Camera>
          )}
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FDF9ED',
    paddingTop: 50,
  },

  fecharModalButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -200,
  },
  cameraIconContainer: {
    marginTop: -10,
    marginBottom: 20, // Added marginBottom
  },
  avatar: {
    width: '100%', // Use '100%' to ensure the image takes up the entire container
    height: '100%',
    borderRadius: 200,
  },
  avatarPlaceholder: {
    fontSize: 18,
    color: '#666',
  },
  sairButton: {
    marginTop: 20,
  },
  sairButtonText: {
    color: 'red',
    fontSize: 18,
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  fecharCameraButton: {
    marginBottom: 20,
  },
  tirarFotoButton: {
    alignSelf: 'flex-end',
  },
  alternarCameraButton: {},
  confirmarFotoButton: {
    marginBottom: 20,
  },
  Icon: {
    marginBottom: -40,
    marginTop:15,
    marginLeft:10
  },
  lixeiraIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  tirarFotoButton: {
    marginTop:'160%', // Ajuste a posição conforme necessário
    alignSelf: 'center',
  },
  tirarFotoIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e4bbb7',
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
  sairButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  sairButtonText: {
    color: 'red',
    fontSize: 18,
  },
});

export default Perfil;
