import React from "react"
import {Font} from 'expo'
import {View, Text, TouchableOpacity,TouchableWithoutFeedback} from "react-native"
import styles from "./Styles/NavbarStyles"
import Icon from './CustomIcon'

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
            return (
                <TouchableOpacity onPress={() => alert("back")}>
                    <Icon name="left" style={styles.favIco}></Icon>
                </TouchableOpacity>
                
            )
        }
    }

    pressFavorite = () => {
        const {onPressFavorite} = this.props
        if(typeof onPressFavorite === 'function')
        {
            onPressFavorite()
        }
    }
    rightButton = () => {
        const {rightButton, favorites} = this.props
        if(rightButton){
            if(favorites){
                return (
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <Icon name="favorites" style={[styles.favIco,styles.favorite]}></Icon>
                    </TouchableWithoutFeedback>
                )
                
            }else{
                return (
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <Icon name="favorites" style={styles.favIco}></Icon>
                    </TouchableWithoutFeedback>
                )
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