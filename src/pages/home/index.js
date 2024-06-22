import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import App from '../../../app/App'
import ModalDados from '../../components/modal/ModalDados'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name="App" component={App} options={{headerShown: false}}/>
                <Stack.Screen name="ModalDados" component={ModalDados}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator