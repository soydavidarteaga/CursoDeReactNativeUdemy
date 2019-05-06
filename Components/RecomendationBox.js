import React from "react";
import { View, Text,Image,ScrollView } from "react-native";
import styles from "./Styles/RecomendationBoxStyles"
import Icon from './CustomIcon'
import MiniRecipe from "./MiniRecipe"

export default class RecomendationBox extends React.Component  {
    constructor(props){
        super(props)
    }  
    renderScroll = () => {
        const {data} = this.props
        return (
            <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroller}
            >
                {data.map(item => {
                    return <MiniRecipe key={item.id} data={item} />
                })}
            </ScrollView>
        )
    }
    render(){
        const {data} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Platos recomendados</Text>
                {this.renderScroll()}
            </View>
        )
    }
}