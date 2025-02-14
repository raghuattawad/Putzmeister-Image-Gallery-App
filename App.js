import React from 'react';
// Inital screen with Navigation 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenComponent from './UIComponennts/HomeScreenComponent';
import SearchScreen from './UIComponennts/SearchScreenComponent';
import DetailsScreenComponent from './UIComponennts/DetailsScreenComponent';

const Stack = createStackNavigator();
// Inital screen with Navigation 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenComponent} />
        <Stack.Screen name="Search" component={SearchScreen} options={{title:'Search Gallery'}} />
         <Stack.Screen name='Details' component={DetailsScreenComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
