import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { Audio } from 'expo-av';

//som
const MyComponent = ({ navigation }) => {
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

            navigation.navigate('SignIn');
        } catch (error) {
            console.log('Erro ao reproduzir o som:', error);
        }

    };

    useEffect(() => {
        loadSounds();
        return () => {
            buttonSound.unloadAsync();
        };
    }, []
    );

//fim do som

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="#FDF9ED" barStyle='dark-content' />
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Agende o seu horário a qualquer hora e lugar!</Text>
                <Text style={styles.text}>Faça o login para continuar.</Text>

                <TouchableOpacity style={styles.button} onPress={playSound}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};

export default MyComponent;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDF9ED'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FDF9ED',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#E4BBB7',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#fff',
    },
    text: {
        color: '#FDF9ED',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#D07B85',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
})