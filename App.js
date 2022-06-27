import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);

  // if toggle return light
  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity
        onPress={() =>{
          setToggle(true);
        }}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle
             ? require('./assets/Icons_Dio/eco-light.png')
             : require('./assets/Icons_Dio/eco-light-off.png')
          } 
        />
      <Image
        style={style.logoDio}
        source={
          toggle
           ? require('./assets/Icons_Dio/logo-dio.png')
           : require('./assets/Icons_Dio/logo-dio-white.png')
        }
      />
    </TouchableOpacity>
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
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  logoDio:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
