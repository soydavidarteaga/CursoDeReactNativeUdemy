import React from "react";
import { View, Text,Image } from "react-native";
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../Theme/Fonts/config.json';
const Icon = createIconSetFromFontello(fontelloConfig, 'recipes');

class CreateIcon extends React.Component  {
    state = {
        fontLoaded: false
      }
      async componentDidMount() {
        await Font.loadAsync({
          'recipes': require('../assets/fonts/recipes.ttf')
        });
    
        this.setState({fontLoaded: true});
      }    
    constructor(props)  
    {
        super(props)
    }
    render(){
        const {name,style} = this.props
        if (!this.state.fontLoaded) { return null;}
        return(
            <Icon name={name} />
        )
    }
}