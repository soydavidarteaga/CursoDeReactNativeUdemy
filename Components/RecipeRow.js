import React from "react";
import { View } from "react-native";
import styles from "./Styles/RecipeRowStyles"

class RecipeRow extends React.Component  {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}></View>
                <View style={styles.infoContainer}></View>
            </View>
        )
    }
}


export default RecipeRow;