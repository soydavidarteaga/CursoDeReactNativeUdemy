import React from "react";
import { View, Text,Image } from "react-native";
import styles from "./Styles/RecipeRowStyles"
import Icon from './CustomIcon'

class RecipeRow extends React.Component  {
    constructor(props){
        super(props)
    }      
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
            <View style={styles.container}>
                <View style={styles.imageContainer}>{this.renderImage()}</View>
                <View style={styles.infoContainer}>
                    <Text style={styles.category}>{data.CategoryName}</Text>
                    <Text style={styles.category}>{data.name}</Text>
                    <View style={styles.properties}>
                        <View style={styles.cell}>
                            <Icon name="duration" style={styles.cellIcon} />
                            <Text style={styles.cellText}>{data.duration} Minutos</Text>
                        </View>
                        <View style={styles.cell}>
                            <Icon name="difficulty" style={styles.cellIcon} />
                            <Text style={styles.cellText}>{data.complexity}</Text>
                        </View>
                        <View style={styles.cell}>
                            <Icon name="recipes" style={styles.cellIcon} />
                            <Text style={styles.cellText}>{data.people} Personas</Text>
                        </View>                                                
                    </View>
                </View>
            </View>
        )
    }
}


export default RecipeRow;