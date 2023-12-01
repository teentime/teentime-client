import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home';
import {ROUTER} from '../constants';
import {View} from 'react-native';
import Header from '../components/common/Header';
import BottomNavigator from '../components/common/BottomNavigator';

const Stack = createNativeStackNavigator();

const Provider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTER.HOME}>
        <Stack.Screen
          options={Header({name: '타이틀'}) as any}
          name={ROUTER.HOME}
          component={Home}
        />
        <Stack.Screen name={ROUTER.TEST} component={View} />
        <Stack.Screen
          name="Root"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Provider;
