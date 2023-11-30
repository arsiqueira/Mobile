import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import {Ionicons} from '@expo/vector-icons'

export default function ButtonHome({size, color}){
    return(
        <View style={styles.container}>
            <Ionicons
            name="home"
            size={size}
            color={"#E4BBB7"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor: '#E4BBB7',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:20,
        borderColor: '#E4BBB7',
        borderWidth: 2,
        backgroundColor: "#FDF9ED",
    }
})