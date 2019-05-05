import React from "react"
import {Font} from 'expo'
import {View, Text, TouchableOpacity,TouchableWithoutFeedback} from "react-native"
import styles from "./Styles/NavbarStyles"
import Icon from './CustomIcon'
import {withNavigation} from "react-navigation"

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
        const { leftButton , transparent } = this.props
        const {navigation} = this.props
        if(leftButton){
            return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="left" style={[styles.favIco,transparent ? styles.alternate: null]}></Icon>
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
        const {rightButton, favorites,transparent} = this.props
        if(rightButton){
            if(favorites){
                return (
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <Icon name="favorites" style={[styles.favIco,styles.favorite,transparent ? styles.alternate: null]}></Icon>
                    </TouchableWithoutFeedback>
                )
                
            }else{
                return (
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <Icon name="favorites" style={[styles.favIco,transparent ? styles.alternate: null]}></Icon>
                    </TouchableWithoutFeedback>
                )
            }
            
        }
    }
    render(){
        const {style,title,transparent} = this.props;

        if (!this.state.fontLoaded) { return null;}
        return (
            <View style={[styles.navbar,transparent ? styles.transparent: null]}>
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

export default withNavigation(NavBar);