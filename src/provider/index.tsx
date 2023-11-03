import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home';
import {ROUTER} from '../constants';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const Provider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTER.HOME}>
        <Stack.Screen name={ROUTER.HOME} component={Home} />
        <Stack.Screen name={ROUTER.TEST} component={View} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Provider;
