import React from "react";
import { View, Text,Image } from "react-native";
import styles from "./Styles/CategoryRowStyles"
import Icon from './CustomIcon'

export default class CategoryRow extends React.Component  {
    constructor(props){
        super(props)
    }  
    render(){
        const {data} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.cellText}>{data.name}</Text>
            </View>
        )
    }
}