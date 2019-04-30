import { StyleSheet } from 'react-native';

import {Metrics, Colors, Fonts } from "../../Theme";

export default styles = StyleSheet.create({
    container:{
        marginHorizontal:Metrics.baseSpace,
        marginBottom:Metrics.baseSpace,
        justifyContent:"flex-start",
        alignItems:"stretch",
        backgroundColor:Colors.whiteFull,
        overflow:"hidden",
        borderRadius:Metrics.borderRadius
    },
    imageContainer:{
        height:128,
        backgroundColor:"gray"
    },
    infoContainer:{
        paddingVertical:Metrics.smallSpace,
        paddingHorizontal:Metrics.baseSpace,
        justifyContent:"center",
        alignItems:"stretch",
        height:88,
    },
    recipeImage:{
        flex:1
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
        color:Colors.mediumGrey
    }
})