import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GenericScreen from './Containers/GenericScreen'
import {Font} from 'expo'
import {Provider} from 'mobx-react/native'
import stores from './MobX'
import AppNavigator from './Navigation/AppSimpleNavigation';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
      'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'ProximaNova-Bold': require('./assets/fonts/ProximaNova-Bold.ttf'),
      'recipes': require('./assets/fonts/recipes.ttf')
    });
    this.setState({ fontLoaded: true });
  }  
  static navigationOptions = {
    tabBarVisible: false
  }
  render() {
    if (!this.state.fontLoaded) { return null;}
    
    return (
      <Provider {...stores}>
        <AppNavigator></AppNavigator>
      </Provider>
      
    );
  }
}
