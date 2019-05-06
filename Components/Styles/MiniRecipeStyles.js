import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts } from "../../Theme";

export default styles = StyleSheet.create({
    container:{
        marginLeft:Metrics.baseSpace,
        justifyContent:"center",
        height:128,
        alignItems:"center",
        overflow:"hidden",
        borderRadius:Metrics.borderRadius
    },
    recipeImage:{
        width:280,
        height:128
    }
});