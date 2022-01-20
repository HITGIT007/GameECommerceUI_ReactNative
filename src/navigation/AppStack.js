import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Home from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen component={Home} name="Home" />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
