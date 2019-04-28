import React from "react"
import {View, Text} from "react-native"
import styles from "./Styles/NavbarStyles"

class NavBar extends React.Component {
    render(){
        const {style,title} = this.props;


        return (
            <View style={style}>
                <Text style={styles.navbarText}>{title}</Text>
            </View>
        )        
    }
}

export default NavBar;