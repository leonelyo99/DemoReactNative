import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParam} from './TabList';
import {SearchScreen} from '../screens/SearchScreen';
import {PokemonScreen} from '../screens/PokemonScreen';
const TabSearchStack = createStackNavigator<RootStackParam>();

export const TabSearch = () => {
  return (
    <TabSearchStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabSearchStack.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearchStack.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearchStack.Navigator>
  );
};