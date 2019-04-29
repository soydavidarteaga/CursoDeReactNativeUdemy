import React from "react"
import {Font} from 'expo'
import {View, Text} from "react-native"
import styles from "./Styles/NavbarStyles"
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../Theme/Fonts/config.json';
const Icon = createIconSetFromFontello(fontelloConfig, 'recipes');

class NavBar extends React.Component {
    state = {
        fontLoaded: false
      }
      async componentDidMount() {
        await Font.loadAsync({
          'recipes': require('../assets/fonts/recipes.ttf')
        });
    
        this.setState({fontLoaded: true});
      }    
    backButton = () => {
        const { leftButton } = this.props
        if(leftButton){
            return <Icon name="left" style={styles.favIco}></Icon>
        }
    }

    rightButton = () => {
        const {rightButton, favorites} = this.props
        if(rightButton){
            if(favorites){
                return <Icon name="favorites" style={[styles.favIco,styles.favorite]}></Icon>
            }else{
                return <Icon name="favorites" style={styles.favIco}></Icon>
            }
            
        }
    }
    render(){
        const {style,title} = this.props;

        if (!this.state.fontLoaded) { return null;}
        return (
            <View style={styles.navbar}>
                <View style={styles.leftContainer}>
                    {this.backButton()}
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.navbarText}>{title}</Text>
                </View>
                
                <View style={styles.rightContainer}>
                    {this.rightButton()}
                </View>
            </View>
        )        
    }
}

export default NavBar;