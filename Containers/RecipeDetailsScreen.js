import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import styles from './styles/RecipeDetailsScreenStyles'
import NavBar from "../Components/Navbar"
import Icon from "../Components/CustomIcon"

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
  renderImage = () => {
    const {navigation} = this.props
    const data = navigation.getParam("data",{})
      let imageUrl = "http://via.pladeholder.com/640x360";
      if(data && data.photo) {
          imageUrl = data.photo
      }
      return (    
        <View style={styles.imageContainer}>
          <Image
              style={styles.recipeImage}
              source={{uri: data.photo}}
              recizeMode="cover"
          />
          <View style={styles.darkener}></View>        
        </View>                

      )
  }   
  renderInfo = () => {
    const {navigation} = this.props
    const data = navigation.getParam("data",{})
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{data.CategoryName}</Text>
        <Text style={styles.title}>{data.name}</Text>
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
    )
  }
  renderIngredients = () => {
    const {navigation} = this.props
    const data = navigation.getParam("data",{})
    if(data.ingredients)    {
      return(
        <View style={styles.infoBox}>
          <Text style={styles.header}>Ingredientes</Text>
          <Text style={styles.description}>{data.ingredients}</Text>
        </View>
      )
    }
  }
  renderInstructions = () => {
    const {navigation} = this.props
    const data = navigation.getParam("data",{})
    if(data.description)    {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Preparacion</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>        
      )
    }
  }
  renderContent = () => {
    return (
      <ScrollView>
        {this.renderImage()}
        {this.renderInfo()}
        {this.renderIngredients()}
        {this.renderInstructions()}
      </ScrollView>
    )
  }
  render() {
    const {favorite} = this.state
    const {navigation} = this.props
    const data = navigation.getParam("data",{})
    return (
      <View style={styles.mainScreen}>
      <StatusBar barStyle="light-content" />
        <NavBar leftButton={true} rightButton={true} transparent={true} onPressFavorite={this.pressFavorite} favorites={favorite} style={styles.navbar} />
        <View style={styles.container}>{this.renderContent()}</View>
      </View>
    );
  }
}
