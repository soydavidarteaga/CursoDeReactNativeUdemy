import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/GenericScreenStyles'
import NavBar from "../Components/Navbar"

export default class GenericScreen extends React.Component {
  render() {
    return (
      <NavBar leftButton={true} rightButton={true} favorites={true} title="Generic Screen" style={styles.navbar} />
    );
  }
}
