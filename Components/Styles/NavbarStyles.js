import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts } from "../../Theme";

export default styles = StyleSheet.create({
    navbar:{
      marginTop: Metrics.statusBarHeight,
      height:Metrics.navBarHeight,
      backgroundColor: Colors.whiteFull,
      alignItems: 'center',
      justifyContent: 'center',
    },    
    navbarText:{
        fontWeight: 'bold',
    }
  });