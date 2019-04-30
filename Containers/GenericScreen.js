import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"

export default class GenericScreen extends React.Component {
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
  render() {
    const {favorite} = this.state
    return (
      <NavBar leftButton={true} rightButton={true} onPressFavorite={this.pressFavorite} favorites={favorite} title="Generic Screen" style={styles.navbar} />
    );
  }
}
