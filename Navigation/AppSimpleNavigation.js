import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation'
import GenericScreen from '../Containers/GenericScreen'
import ExploreScreen from "../Containers/ExploreScreen"
import CategoriesScreen from "../Containers/CategoriesScreen"

const TabNav =  createBottomTabNavigator(
    {
        Explore:{screen:ExploreScreen},
        Categories:{screen:CategoriesScreen},
        Favorites:{screen:GenericScreen}
    },
    {
        headerMode:"none",
        initialRouteName:"Explore"
    }
)

const NavStack = createStackNavigator(
    {
        Home:{screen:TabNav}
    },
    {
        headerMode:"none", 
    }
)

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;