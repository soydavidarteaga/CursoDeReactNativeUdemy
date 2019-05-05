import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts, AppStyles } from "../../Theme";

export default styles = StyleSheet.create({
  ...AppStyles.screen,
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "stretch",
      backgroundColor: Colors.mainBackground
    },
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

    },
    title: {
      fontFamily: Fonts.family.base,
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: 24,
      letterSpacing: 0.5,
      textAlign: "center",
      color: Colors.black
    },
    category: {
      fontFamily: Fonts.family.base,
      fontSize: 10,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 24,
      letterSpacing: 1,
      color: Colors.darkGrey,
      textAlign: "center"
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
    },
    infoContainer:{
        paddingVertical:Metrics.smallSpace,
        paddingHorizontal:Metrics.baseSpace,
        justifyContent:"center",
        alignItems:"stretch",
        height:88,
    },
    recipeImage:{
      height:198
    },
    properties:{
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row"
    },
    cell:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginRight:Metrics.smallSpace,
        flexDirection:"row"
    },
    cellIcon:{
        fontSize:Metrics.icons.small,
        color:Colors.mediumGrey,
        marginRight:Metrics.smallSpace
    },
    cellText:{
        fontFamily:Fonts.family.base,
        fontSize:13,
        fontWeight:"300",
        fontStyle:"normal",
        lineHeight:24,
        letterSpacing:0.5,
        color:Colors.mediumGrey,
        textAlign:"center"
    },
    header:{
      fontFamily: Fonts.family.bold,
      lineHeight:24,
      textAlign:"center",
      color:Colors.black,
      fontSize:14
    },
    description:{
      fontFamily:Fonts.family.base,
      color:Colors.darkGrey,
      lineHeight:24,
      fontSize:14
    },
    infoBox: {
      paddingVertical: Metrics.smallSpace,
      paddingHorizontal: Metrics.baseSpace,
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "stretch"
    },
    darkener:{
      position:"absolute",
      left:0,
      right:0,
      top:0,
      bottom:0,
      zIndex:5,
      backgroundColor: "rgba(0,0,0,0.3)"
    }
  });