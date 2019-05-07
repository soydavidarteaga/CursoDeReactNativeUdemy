import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"
import RecipeRow from "../Components/RecipeRow"
import TabBar from '../Components/TabBar';
import RecomendationBox from '../Components/RecomendationBox';
import { withNavigation } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import RecipeStore from '../MobX/RecipeStore';


@observer
class CategoryScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      example:5,
      favorite:true
    }
    this.recipeStore = new RecipeStore();
  }
  pressFavorite = () => {
    const {favorite} = this.state;
    this.setState({
      favorite:!favorite
    })
  } 

  componentDidMount = () => {
    const {navigation} = this.props;
    const category = navigation.getParam("category", {});
    console.log(category.id)
    this.recipeStore.getRecipes(category.id)
  }

  keyExtractor = (item,index) => item.id;
  renderList = () => {
    return(
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.recipeStore.recipesSource}
        renderItem={({item}) => <RecipeRow data={item}/>}
      />
    )
  }
  static navigationOptions = {
    tabBarVisible: false
  }
  render() {
    const {favorite} = this.state
    const {navigation} = this.props
    const category = navigation.getParam("category", {});
    return (
      <View style={styles.mainScreen}>
        <NavBar leftButton={true} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title={category.name} style={styles.navbar} />
        {this.renderList()}
      </View>
      
    );
  }
}

export default withNavigation(CategoryScreen)
