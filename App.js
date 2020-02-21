import React from 'react';
import {ScrollView, View} from 'react-native';
import 'react-native-gesture-handler';
import PetList from './src/components/PetList';
import PetsDetails from './src/components/PetsDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PetsContainer from './src/containers/petsContainer';
import configureStore from './src/store/configureStore';
const storeConfig = configureStore([]);

const Stack = createStackNavigator();


const App = () => {
  return (
    <storeConfig.Provider store={storeConfig.store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={PetsContainer} />
          <Stack.Screen name="Details" component={PetsDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </storeConfig.Provider>
  );
};

export default App;
