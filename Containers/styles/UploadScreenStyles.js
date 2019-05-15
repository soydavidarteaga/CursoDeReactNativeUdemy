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
    },    
    mainScreen:{
        backgroundColor:Colors.lightGrey
    },
    input:{
        height:40,
        borderColor:"#ccc",
        borderWidth:2,
        marginBottom:20
    },
    textArea:{
        height:120
    },
    button:{
        backgroundColor:'skyblue',
        paddingTop:15,
        paddingBottom:15
    },  
    textButton:{
        color:'white',
        textAlign:'center'
    },
    form:{
        marginTop:20,
        paddingLeft:15,
        paddingRight:15
    }
  });