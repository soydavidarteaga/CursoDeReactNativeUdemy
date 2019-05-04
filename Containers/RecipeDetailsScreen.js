import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/RecipeDetailsScreenStyles'
import NavBar from "../Components/Navbar"

export default class RecipeDetailsScreen extends React.Component {
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
  renderContent = () => {
    return (
      <View>
        <View style={styles.imageContainer} />
        <View style={styles.infoContainer} />
        <View style={styles.ingredientsBox} />
        <View style={styles.instructionBox} />
      </View>
    )
  }
  render() {
    const {favorite} = this.state
    const {navigation} = this.props
    const data = navigation.getParam("data",{})
    return (
      <View style={styles.mainScreen}>
        <NavBar leftButton={true} rightButton={true} onPressFavorite={this.pressFavorite} favorites={favorite} title={data.name} style={styles.navbar} />
        <View style={styles.container}>{this.renderContent()}</View>
      </View>
    );
  }
}
