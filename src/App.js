import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect, Provider } from 'react-redux';

import Router from './router'
import {store} from './redux'
const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <NavigationContainer> 
        <Router />
        </NavigationContainer>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter:{
    textAlign :'center'
  }
});

export default App;
