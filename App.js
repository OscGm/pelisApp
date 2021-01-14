import React from 'react';
import {View, Text} from 'react-native';

// import reactNavigation
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


// import de pantallas 
import catalogo from './screens/catalogo'
import detalles from './screens/detalles'

const App = () => {
  return (
    <>
      <NavigationContainer>
        
        <Stack.Navigator 
        initialRouteName='catalogo'
        screenOptions = {{
          headerShown: false
        }}>
          <Stack.Screen
            name = 'catalogo'
            component = {catalogo}
          />
          <Stack.Screen
            name = 'detalles'
            component = {detalles}
          />
        </Stack.Navigator>

      </NavigationContainer>

    
    
    </>
  );
};

export default App;
