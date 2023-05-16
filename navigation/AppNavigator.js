import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../src/screens/Splash';
import Welcome from '../src/screens/Welcome';
import Login from '../src/screens/Login';
import SignUp from '../src/screens/SignUp';
import Home from '../src/screens/Home';
const Stack =createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name={'Splash'} component={Splash} options={{headerShown:false}} />
        <Stack.Screen name={'Welcome'} component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name={'SignUp'} component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name={'Home'} component={Home} options={{headerShown:false}} />
        <Stack.Screen name={'Login'} component={Login} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;