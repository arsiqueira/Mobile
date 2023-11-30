import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Comentarios from './componente/index';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import Notificacoes from '../../componente/notificacao';
import Perfil from '../../componente/perfil';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#E4BBB7" barStyle='light-content' />

            <View style={styles.containerTopo}>

                <Perfil />
                <Image source={require('../../../assets/assets/logo.png')} style={styles.img} />
                <Notificacoes />

            </View>
            <ImageBackground
                source={require('../../../assets/fundo.png')}
                style={styles.imagemFundo}>

                <ScrollView style={styles.scrollContainer}>

                    <View style={styles.containerConteudo}>
                        <Image source={require('../../../assets/assets/icones/chat.png')} style={styles.imgRec} />
                        <Text style={styles.textRec}>RECADOS</Text>
                        <View style={styles.contBorMem}>
                            <View >
                                <Comentarios />

                            </View>

                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>

        </View>
    );
}
const styles = StyleSheet.create({


    container: {
        flex: 1,
        flexDirection: 'column'
    },
    imagemFundo: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
        marginTop: -120,
        zIndex: -4
    },

    img: {
        resizeMode: 'stretch',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    containerConteudo: {
        flex: 150,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderButtomLeftRadius: 25,
        borderButtomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 10,
    },
    imgRec: {
        resizeMode: 'stretch',
        width: 40,
        height: 40,
        marginLeft: 25,
        marginTop: 120,
    },
    textRec: {
        fontSize: 40,
        color: '#D07B85',
        marginTop: -44,
        marginLeft: 70
    },
    contBor: {
        marginTop: 40,
        borderWidth: 2,
        borderColor: '#E4BBB7',
        borderRadius: 28,
        padding: 10,
        backgroundColor: "#FDF9ED",
        width: "95%",
        height: "20%",
        alignSelf: 'center'
    },

    imgAler: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    textAler: {
        fontSize: 30,
        color: '#D07B85',
        marginTop: -30,
        marginLeft: 40
    },
    textContAler: {
        fontSize: 20,
        marginTop: 10,
        alignSelf: 'center',

    },
    contBorMem: {
        marginTop: '5%',  // Margem superior de 5% em relação ao elemento anterior
        borderWidth: 2,
        borderColor: '#E4BBB7',
        borderRadius: 28,

        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '100%',  // Largura de 90% do componente pai
        alignSelf: 'center',
        flexGrow: 1,  // Permite que o componente cresça conforme o espaço disponível
        flexDirection: 'column',  // Empilha os elementos verticalmente
        justifyContent: 'flex-start',  // Alinha os elementos ao início
    },
    imgMem: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    textMem: {
        fontSize: 28,
        color: '#D07B85',
        marginTop: -29,
        marginLeft: 40
    },
    textContMem: {
        fontSize: 23,
        marginTop: 10,
        alignSelf: 'center',

    }, containerTopo: {
        backgroundColor: '#E4BBB7',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

        // Definindo uma altura fixa
    },

    scrollContainer: {
        flex: 1,
        paddingTop: '5%', // Ajuste conforme necessário para começar após containerTopo
    },
})