import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"
import RecipeRow from "../Components/RecipeRow"
import TabBar from '../Components/TabBar';
import { observer, inject } from 'mobx-react/native';

@inject("recipes")
@observer
export default class FavoriteScreen extends React.Component {
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

  componentDidMount = () => {
    const {recipes} = this.props
    recipes.getFavorites()
  }
  keyExtractor = (item,index) => item.id;
  renderList = () => {
    const {recipes} = this.props
    return(
      <FlatList
        keyExtractor={this.keyExtractor}
        data={recipes.favoritesSource}
        renderItem={({item}) => <RecipeRow data={item}/>}
      />
    )
  }
  static navigationOptions = {
    tabBarVisible: false
  }
  render() {
    const {favorite} = this.state
    return (
      <View style={styles.mainScreen}>
        <NavBar leftButton={false} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Favoritos" style={styles.navbar} />
        {this.renderList()}
        <TabBar selected="favorites"></TabBar>
      </View>
      
    );
  }
}
