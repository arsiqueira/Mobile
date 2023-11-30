import React, { useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

const VideoScreen = ({ navigation }) => {
    const videoRef = useRef(null);

    const handleFecharTela = () => {
        navigation.goBack(); // Fecha a tela de vídeo
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/fundo.png')}
                style={styles.imagemFundo}>
                <TouchableOpacity onPress={handleFecharTela} style={styles.fecharButton}>
                    <FontAwesome name="times" size={30} color="#e4bbb7" />
                </TouchableOpacity>
                <View style={styles.content}>
                <Text style={styles.textRec}>NOTIFICAÇÕES</Text>
                    <Text style={styles.textNot}>🎉 Veja o resultado dessa unha 🎉</Text>
                    <Video
                        ref={videoRef}
                        source={require('../../assets/assets/video.mp4')} // Caminho correto para o seu vídeo
                        style={styles.video}
                        useNativeControls // Use os controles nativos do sistema
                        resizeMode="contain"
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imagemFundo: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#FDF9ED',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -120,
    },
    video: {
        marginBottom:-35,
        width: '80%', // Largura do vídeo
        aspectRatio: 480 / 835, // Mantém a proporção
        borderRadius: 20, // Borda arredondada
        borderColor: '#D07B85', // Cor da borda
        borderWidth: 5, // Largura da borda
    },
    fecharButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    textNot: {
        fontSize: 25,
        color: '#D07B85',
        marginBottom: 10,
    },
    textRec: {
        fontSize: 40,
        color: '#D07B85',
        alignSelf:'center',
        marginTop: 0,
        marginBottom:60,
    },
});

export default VideoScreen;
