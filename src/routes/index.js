import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SingIn'
import Cadastro from '../pages/SingIn/Cadastro'
import Concluido from '../pages/SingIn/Cadastro/concluido.js'
import Agendar from '../pages/Agendamento/componente/agendado.js'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import Servicos from '../pages/Servicos'
import Rotas from '../routes.js'
import VideoScreen from '../componente/conteudoVideo'


const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Concluido"
                component={Concluido}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Rotas"
                component={Rotas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Agendar"
                component={Agendar}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



