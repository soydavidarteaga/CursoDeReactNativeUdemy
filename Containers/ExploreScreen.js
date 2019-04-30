import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"
import RecipeRow from "../Components/RecipeRow"

const dataList = [
  {
    "id": "52944",
    "name":"Ecovitch Fish",
    "CategoryName":"Fish",
    "categoryId":"1",
    "duration":11,
    "complexity":"Hard",
    "recomended":true,
    "favorite":true,
    "ingredients":"2 eggs\r\n4 tomatoes\r\n\salt\r\npepper",
    "description":"Rise fish, rub with lemon or line seasoned with salt and pepper or use your favorite s makeing sure the garlic does not burn then and onion, bell pepper thune, scotch bonne",
    "photo":"https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people":10
  },
  {
    "id": "222",
    "name":"French Omelette",
    "CategoryName":"Miscellaneous",
    "categoryId":"1",
    "duration":20,
    "complexity":"Medium",
    "recomended":true,
    "favorite":true,
    "ingredients":"2 eggs\r\n4 tomatoes\r\n\salt\r\npepper",
    "description":"Get everything ready. Warm a 20cm (measured across the top) non-stick frying pan on a medium heat. Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg. With the heat on medium-hot, drop one knob of butter into the pan. It should bubble and sizzle, but not brown. Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan.\r\nLet the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre. Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked. Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left. With the pan flat on the heat, shake it back and forth a few times to settle the mixture. It should slide easily in the pan and look soft and moist on top. A quick burst of heat will brown the underside.\r\nGrip the handle underneath. Tilt the pan down away from you and let the omelette fall to the edge. Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier. For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers. Rub the other knob of butter over to glaze. Serve immediately.",
    "photo":"https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
    "people":5
  },
  {
    "id": "333",
    "name":"Garides Saganaki",
    "CategoryName":"Seafood",
    "categoryId":"3",
    "duration":30,
    "complexity":"Easy",
    "recomended":true,
    "favorite":true,
    "ingredients":"2 eggs\r\n4 tomatoes\r\n\salt\r\npepper",
    "description":"Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside.\r\nHeat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened.\r\nWhile the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on.\r\nWhen the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread.\r\nThough completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve.",
    "photo":"https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
    "people":8
  }
]

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

  keyExtractor = (item,index) => item.id;
  renderList = () => {
    return(
      <FlatList
        keyExtractor={this.keyExtractor}
        data={dataList}
        renderItem={({item}) => <RecipeRow data={item}/>}
      />
    )
  }
  render() {
    const {favorite} = this.state
    return (
      <View style={styles.mainScreen}>
        <NavBar leftButton={false} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Explore" style={styles.navbar} />
        {this.renderList()}
      </View>
      
    );
  }
}
