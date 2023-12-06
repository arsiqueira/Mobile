import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function SingIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#E4BBB7" barStyle='light-content'/>
            

            <Animatable.View animation="fadeInUp" style={styles.center}>
                <Image source={require('../../../../assets/assets/icones/checked.png')} style={styles.img}/>
                <Text style={styles.title}>Agendamento realizado com sucesso!</Text>

                <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Rotas')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4BBB7',
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E4BBB7'
    },
    
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:28,
        marginBottom: 12,
        color: '#fff',
    },
    img:{
        justifyContent:'center',
        alignContent:'center',
    },
    button:{
        position:'absolute',
        backgroundColor: '#D07B85',
        borderRadius: 50,
        paddingVertical:8,
        width:'60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight: 'bold',
    }
    
   
})