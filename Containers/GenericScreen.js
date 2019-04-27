import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GenericScreen extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Pantalla Generica</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar:{
    marginTop: 20,
    height:56,
    backgroundColor: "#d3d3d3",
    alignItems: 'center',
    justifyContent: 'center',
  },    
  navbarText:{
      fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
