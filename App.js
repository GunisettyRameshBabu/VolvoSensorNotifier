/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View ,
  ToolbarAndroid,
  ScroolView
} from 'react-native';

import {Tabs, Root , LoginNavigator} from './src/config/router'
//import Login from './src/screens/Login'
// import Main from './src/components/Main';

export default class App extends Component {
  render() {
  return (
    // // <Root />
     <LoginNavigator/>

//     <Login
//   onLogin={onLogin}
//   onResetPassword={onResetPassword}
// />

    // <View style={styles.container}>
    //     <Main />
    //   </View>
  );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
