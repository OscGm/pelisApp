import 'react-native-gesture-handler';
import React from 'react';

// import reactNavigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


// import de pantallas 
import Catalogo from './screens/catalogo'
import Detalles from './screens/detalles'

const App = () => {

  return (
    <>
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="Catalogo"
        >
          <Stack.Screen
            name="Catalogo"
            component={Catalogo}
          />
          <Stack.Screen
            name="Detalles"
            component={Detalles}
            options={ ({route}) => ({
              title: route.params.title
            })}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

export default App;
