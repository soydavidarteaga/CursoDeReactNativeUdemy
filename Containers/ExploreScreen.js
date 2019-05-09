import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"
import RecipeRow from "../Components/RecipeRow"
import TabBar from '../Components/TabBar';
import RecomendationBox from '../Components/RecomendationBox';
import {observer, inject} from 'mobx-react/native'

@inject("recipes")
@observer
class ExploreScreen extends React.Component {
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
    recipes.getRecipes()
    recipes.getRecomended()
  }
  keyExtractor = (item,index) => item.id;
  renderList = () => {
    const {recipes} = this.props
    return(
      <FlatList
        ListHeaderComponent={this.renderRecomended}
        keyExtractor={this.keyExtractor}
        data={recipes.recipesSource}
        renderItem={({item}) => <RecipeRow data={item}/>}
      />
    )
  }
  renderRecomended = () => {
    const {recipes} = this.props
    return <RecomendationBox data={recipes.recomendedSource}></RecomendationBox>
  }
  static navigationOptions = {
    tabBarVisible: false
  }
  render() {
    const {favorite} = this.state
    return (
      <View style={styles.mainScreen}>
        <NavBar menuButton={true} leftButton={false} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Explore" style={styles.navbar} />
        {this.renderList()}
        <TabBar selected="explore"></TabBar>
      </View>
      
    );
  }
}

export default ExploreScreen;
