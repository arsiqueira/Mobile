import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function SingIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome completo</Text>
                <TextInput
                    placeholder='Digite seu nome'
                    style={styles.input}
                />
                <Text style={styles.title}>Celular</Text>
                <TextInput
                    placeholder='Digite seu numero de telefone'
                    style={styles.input}
                    keyboardType='phone-pad'
                />
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite seu email'
                    style={styles.input}
                    keyboardType='email-address'
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Sua senha'
                    style={styles.input}
                />
                <Text style={styles.title}>Confirme a senha</Text>
                <TextInput
                    placeholder='Insira novamente a mesma senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Concluido')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

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
        color: '#E4BBB7'
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
        color: '#fff'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#fff'
    },
    button: {
        backgroundColor: '#D07B85',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
   
})