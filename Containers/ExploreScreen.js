import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"
import RecipeRow from "../Components/RecipeRow"

export default class ExploreScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      example:5,
      favorite:true
    }
  }
  pressFavorite = () => {
    const {favorite} = this.state;
    this.setState({
      favorite:!favorite
    })
  } 
  render() {
    const {favorite} = this.state
    return (
      <View style={styles.mainScreen}>
        <NavBar leftButton={false} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Explore" style={styles.navbar} />
        <RecipeRow/>
        <RecipeRow/>
        <RecipeRow/>
      </View>
      
    );
  }
}
