import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Rota from '../../routes/index.js';

const Separator = () => {
    return <View style={styles.separator} />;
}

const BtnGoogle = () => {
    return (
        <TouchableOpacity
            style={styles.buttonGoogleStyle}
            activeOpacity={0.5} onPress={() => (Alert.alert("Só mais um poquinho", "Estamos preprarando essa função para você"))}>
            <Image
                source={require('../../../assets/assets/icones/google.png')}
                style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
                Entrar com Google
            </Text>
        </TouchableOpacity>
    );
}

const BtnFacebook = () => {
    return (
        <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}>
            <Image
                source={require('../../../assets/assets/icones/facebook.png')}
                style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
                Entrar com Facebook
            </Text>
        </TouchableOpacity>
    );
}

export default function SingIn() {
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();

    const buttonSound = new Audio.Sound();


    const loadSounds = async () => {
        try {
            await buttonSound.loadAsync(require('../../../assets/audio/gota.mp3'));
            // Carregue os outros sons da mesma maneira, se houver mais de um.
        } catch (error) {
            console.error('Erro ao carregar os sons:', error);
        }
    };

    const playSound = async () => {
        try {
            await buttonSound.replayAsync();
            console.log('Ação executada!');

            navigation.navigate('Rotas');
        } catch (error) {
            console.log('Erro ao reproduzir o som:', error);
        }
    };

    useEffect(() => {
        loadSounds();
        return () => {
            buttonSound.unloadAsync();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite seu email...'
                    style={styles.input}
                    keyboardType='email-address'
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Insira sua senha'
                    style={styles.input}
                    value={input}
                    onChangeText={(texto) => setInput(texto)}
                    secureTextEntry={hidePass}
                />
                <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                    {hidePass ?
                        <Ionicons name="eye" color="#fff" size={25} />
                        :
                        <Ionicons name="eye-off" color="#fff" size={25} />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
                <Separator />
                <BtnGoogle />
                <BtnFacebook />
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF9ED',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E4BBB7',
    },
    containerForm: {
        backgroundColor: '#E4BBB7',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        color: '#fff',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#fff',
    },
    icon: {
        marginLeft: '85%',
        marginTop: -40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#D07B85',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#FDF9ED',
    },
    separator: {
        marginVertical: 20,
        borderBottomColor: "#FDF9ED",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D07B85',
        borderWidth: 0.5,
        borderColor: '#E4BBB7',
        height: 40,
        borderRadius: 5,
        margin: 5,
        marginTop: 40,
    },
    buttonGoogleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D07B85',
        borderWidth: 0.5,
        borderColor: '#E4BBB7',
        height: 40,
        borderRadius: 5,
        margin: 5,
        marginTop: 30,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#E4BBB7',
        width: 1,
        height: 40,
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
        fontWeight: 'bold',
    },
});
