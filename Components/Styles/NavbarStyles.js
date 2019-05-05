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
    alternate:{
      color:Colors.whiteFull
    },
    navbarText:{
        fontWeight: 'bold',
    },
    leftContainer:{
      width:Metrics.buttonSize,
      alignItems:"center",
      justifyContent:"center",
      fontSize:14
    },
    rightContainer:{
      width:Metrics.buttonSize,
      alignItems:"center",
      justifyContent:"center",
      fontSize:14
    },
    titleWrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    favorite:{
      color:Colors.darkOrange
    },
    transparent:{
      position:"absolute",
      top:0,
      left:0,
      right:0,
      backgroundColor:"transparent",
      zIndex:10
    }
  });