import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GenericScreen from './Containers/GenericScreen'
import {Font} from 'expo'
import AppSimpleNavigator from './Navigation/AppSimpleNavigation';

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'proximanova-bold': require('./assets/fonts/ProximaNova-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }  
  static navigationOptions = {
    title:"Home"
  }
  render() {
    return (
      //<GenericScreen></GenericScreen>
      <AppSimpleNavigator></AppSimpleNavigator>
    );
  }
}
