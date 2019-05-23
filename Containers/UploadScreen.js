import React from 'react';
import { StyleSheet, Text, View,ScrollView, TextInput, TouchableOpacity, Picker } from 'react-native'
import styles from './styles/UploadScreenStyles'
import NavBar from "../Components/Navbar"
import TabBar from '../Components/TabBar';
import {observer, inject} from 'mobx-react/native'
import GenerateForm from 'react-native-form-builder';

const fields = [
  {
    type: 'text',
    name: 'ame',
    required: true,
    icon: 'ios-person',
    label: 'Name',
  },
  {
    type: 'picker',
    name: 'category',
    mode: 'dialog',
    label: 'Categoria',
    defaultValue: 'PRIMEROS',
    options: ['PRIMEROS','MIXTOS','CARNE','PESCADO'],    
  },
  {
    type: 'picker',
    name: 'complexity',
    mode: 'dialog',
    label: 'Complejidad',
    defaultValue: 'Facil',
    options: ['Facil','Intermedio','Dificil'],    
  },  
  {
    type: 'text',
    name: 'person',
    required: true,
    label: 'Personas',
  },
  {
    type: 'text',
    name: 'ingredients',
    required: true,
    label: 'Ingredientes',
  },
  {
    type: 'text',
    name: 'description',
    required: true,
    label: 'Descripcion',
    multiline: true
  }
]
class UploadScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      example:5,
      favorite:true,      
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
              <GenerateForm
                ref={(c) => {
                  this.formGenerator = c;
                }}
                fields={fields}
              />
            <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Guardar</Text></TouchableOpacity>
        </ScrollView>
        <TabBar selected="upload"></TabBar>
      </View>
      
    );
  }
}

export default UploadScreen;
