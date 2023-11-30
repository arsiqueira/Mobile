import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home'
import Contato from './pages/Contato'
import Servicos from './pages/Servicos'
import Agendamento from './pages/Agendamento'
import Sobre from './pages/Sobre'
import ButtonHome from './componente/buttonHome';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();
function Routes() {
    return (
        
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    
                    position: 'absolute',
                    backgroundColor: '#E4BBB7',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    elevation: 0,
                    height: 50,
                }
            }}
        >

            <Tab.Screen
                name="Servicos"
                component={Servicos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome name='photo' size={size} color={"#FDF9ED"} />
                        }
                        return <FontAwesome name='photo' size={size} color={"#FDF9ED"} />
                    }
                }}
            />

            <Tab.Screen
                name="Agendamento"
                component={Agendamento}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='calendar' size={size} color={"#FDF9ED"} />
                        }
                        return <Ionicons name='calendar-outline' size={size} color={"#FDF9ED"} />
                    }
                }}
            />

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:'',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                       <ButtonHome size={size} color={color}/>
                       
                    )
                        
                }}
            />

            <Tab.Screen
                name="Contato"
                component={Contato}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <MaterialCommunityIcons name='contacts' size={size} color={"#FDF9ED"} />
                        }
                        return <MaterialCommunityIcons name='contacts-outline' size={size} color={"#FDF9ED"} />
                    }
                }}
            />

            <Tab.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="ios-information-circle-sharp" size={size} color={"#FDF9ED"} />
                        }
                        return <Ionicons name="ios-information-circle-outline" size={size} color={"#FDF9ED"}/>
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default Routes;