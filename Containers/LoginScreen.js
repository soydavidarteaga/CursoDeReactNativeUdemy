import React from 'react'
import styles from './styles/LoginScreenStyles'
import {View, TouchableOpacity, Text} from 'react-native'

class LoginScreen extends React.Component {
    constructor (props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button,styles.google]}><Text style={styles.buttonText}>Iniciar sesion con Google</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.facebook]}><Text style={styles.buttonText}>Iniciar sesion con Facebook</Text></TouchableOpacity>
            </View>
        )
    }
}

export default LoginScreen