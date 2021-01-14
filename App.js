import 'react-native-gesture-handler';
import React from 'react';

// import reactNavigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


// import de pantallas 
import catalogo from './screens/catalogo'
import detalles from './screens/detalles'

const App = () => {

  return (
    <>
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="Catalogo"
        >
          <Stack.Screen
            name="Catalogo"
            component={catalogo}
          />
          <Stack.Screen
            name="Detalles"
            component={detalles}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

export default App;
