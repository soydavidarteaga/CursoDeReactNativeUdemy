import React from "react";
import { View, Text,Image, TouchableOpacity } from "react-native";
import styles from "./Styles/MiniRecipeStyles"
import {withNavigation} from "react-navigation"

class MiniRecipe extends React.Component  {
    constructor(props){
        super(props)
    }   
    onPress = () => {
        const {navigation, data} = this.props
        navigation.navigate("Details",{data})
    };   
    renderImage = () => {
        const {data} = this.props;
        let imageUrl = "http://via.pladeholder.com/640x360";
        if(data && data.photo) {
            imageUrl = data.photo
        }
        return (                    
        <Image
            style={styles.recipeImage}
            source={{uri: data.photo}}
            recizeMode="cover"
        />)
    }
    render(){
        const {data} = this.props;
        return(
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container}>
                    {this.renderImage()}
                </View>
            </TouchableOpacity>

        )
    }
}


export default withNavigation(MiniRecipe);