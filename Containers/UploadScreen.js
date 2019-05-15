import React from 'react';
import { StyleSheet, Text, View,ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/UploadScreenStyles'
import NavBar from "../Components/Navbar"
import TabBar from '../Components/TabBar';
import {observer, inject} from 'mobx-react/native'


class UploadScreen extends React.Component {
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
  }

  static navigationOptions = {
    tabBarVisible: false
  }
  render() {
    const {favorite} = this.state
    return (
      <View style={styles.mainScreen}>
        <NavBar menuButton={false} leftButton={false} rightButton={false} onPressFavorite={this.pressFavorite} favorites={favorite} title="Añadir receta" style={styles.navbar} />
        <ScrollView style={styles.form}>
            <TextInput style={styles.input} placeholder="Nombre de receta"></TextInput>
            <TextInput style={styles.input} placeholder="Categoria"></TextInput>
            <TextInput style={styles.input} placeholder="Complejidad"></TextInput>
            <TextInput style={styles.input} placeholder="Personas"></TextInput>
            <TextInput style={styles.input} placeholder="Ingredientes. Separados por coma(,)"></TextInput>
            <TextInput style={[styles.input,styles.textArea]} placeholder="Descripcion"></TextInput>
            <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Guardar</Text></TouchableOpacity>
        </ScrollView>
        <TabBar selected="upload"></TabBar>
      </View>
      
    );
  }
}

export default UploadScreen;
