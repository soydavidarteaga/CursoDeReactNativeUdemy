import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts } from "../../Theme";

export default styles = StyleSheet.create({
    container:{
        marginHorizontal:Metrics.baseSpace,
        marginBottom:Metrics.smallSpace,
        marginTop:Metrics.smallSpace,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.whiteFull,
        height:56
    },
    cellText:{
        ...Fonts.style.h3
    }
})