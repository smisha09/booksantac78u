
import React, { useEffect, useState } from 'react';
import {
 View,
 Text,
 TextInput,
 TouchableOpacity
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'

export default class App extends React.Component{
  render(){
    return(
      <View>
        <WelcomeScreen/>
      </View>
    )
  }
}