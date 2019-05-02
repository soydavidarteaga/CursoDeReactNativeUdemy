import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './styles/GenericScreenStyles'

import NavBar from "../Components/Navbar"
import CategoryRow from "../Components/CategoryRow"


const dataList = [
    {
        id:"1",
        name:"Categoria 1"
    },
    {
        id:"2",
        name:"Categoria 2"
    },
    {
        id:"3",
        name:"Categoria 3"
    },
    {
        id:"4",
        name:"Categoria 4"
    },
    {
        id:"5",
        name:"Categoria 5"
    },
    {
        id:"6",
        name:"Categoria 6"
    },
    {
        id:"7",
        name:"Categoria 7"
    },                        
]
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

  keyExtractor = (item,index) => item.id;
  renderList = () => {
    return(
      <FlatList
        keyExtractor={this.keyExtractor}
        data={dataList}
        renderItem={({item}) => <CategoryRow data={item}/>}
      />
    )
  }

  render() {
    const {favorite} = this.state
    return (
        <View style={styles.mainScreen}>
            <NavBar leftButton={true} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Categorias" style={styles.navbar} />
            {this.renderList()}
        </View>
    );
  }
}
