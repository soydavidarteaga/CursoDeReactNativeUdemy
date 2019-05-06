import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "./Styles/CategoryRowStyles"
import Icon from './CustomIcon'
import { withNavigation } from "react-navigation";


export default withNavigation( class CategoryRow extends React.Component  {
    constructor(props){
        super(props)
    }  
    onPress = () => {
        const { navigation, data } = this.props;
        navigation.navigate("Category", { category: data });
      };
    
    render() {
    const { data } = this.props;

    return (
        <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
            <Text style={styles.cellText}>{data.name}</Text>
        </View>
        </TouchableOpacity>
    );
    }
})