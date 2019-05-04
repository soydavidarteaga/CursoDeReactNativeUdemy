import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts, AppStyles } from "../../Theme";

export default styles = StyleSheet.create({
  ...AppStyles.screen,
    navbar:{
      marginTop: Metrics.statusBarHeight,
      height:Metrics.navBarHeight,
      backgroundColor: Colors.whiteFull,
      alignItems: 'center',
      justifyContent: 'center',
    },    
    navbarText:{
        fontWeight: 'bold',
    },
    imageContainer:{
      height:100,
      backgroundColor:"red"
    },
    infoContainer:{
      height:100,
      backgroundColor:"green"
    },
    ingredientsBox:{
      height:200,
      backgroundColor:"violet"
    },
    instructionBox:{
      height:200,
      backgroundColor:"pink"
    }
  });