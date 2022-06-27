import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import Imagex from './assets/Icons_Dio/eco-light-off.png'

const App = () => {
  const toggle = true; //false

  // if toggle return light
  return (
  <View style={toggle ? style.containerLight : style.container}>
  <Image source={Imagex} />
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
