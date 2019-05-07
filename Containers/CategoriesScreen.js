import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './styles/GenericScreenStyles'

import NavBar from "../Components/Navbar"
import CategoryRow from "../Components/CategoryRow"
import TabBar from "../Components/TabBar"
import { withNavigation } from 'react-navigation';
import {observer,inject} from "mobx-react/native"

@inject("recipes")
@observer
export default class CategoriesScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
    recipes.getCategories()
  }
  keyExtractor = (item,index) => item.id;
  renderList = () => {
    const {recipes} = this.props
    return(
      <FlatList
        keyExtractor={this.keyExtractor}
        data={recipes.categoriesSource}
        renderItem={({item}) => <CategoryRow data={item}/>}
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
            <NavBar leftButton={false} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Categorias" style={styles.navbar} />
            {this.renderList()}
            <TabBar selected="categories"></TabBar>
        </View>
    );
  }
}
