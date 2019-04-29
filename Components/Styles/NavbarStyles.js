import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts } from "../../Theme";

export default styles = StyleSheet.create({
    navbar:{
      marginTop: Metrics.statusBarHeight,
      height:Metrics.navBarHeight,
      backgroundColor: Colors.whiteFull,
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
    },    
    navbarText:{
        fontWeight: 'bold',
    },
    leftContainer:{
      width:Metrics.buttonSize,
      alignItems:"center",
      justifyContent:"center"
    },
    rightContainer:{
      width:Metrics.buttonSize,
      alignItems:"center",
      justifyContent:"center"
    },
    titleWrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    favorite:{
      color:Colors.darkOrange
    }
  });