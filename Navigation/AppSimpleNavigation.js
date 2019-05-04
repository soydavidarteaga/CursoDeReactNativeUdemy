import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation'
import GenericScreen from '../Containers/GenericScreen'
import ExploreScreen from "../Containers/ExploreScreen"
import CategoriesScreen from "../Containers/CategoriesScreen"
import RecipeDetailsScreen from '../Containers/RecipeDetailsScreen';

const TabNav =  createBottomTabNavigator(
    {
        Explore:{screen:ExploreScreen},
        Categories:{screen:CategoriesScreen},
        Favorites:{screen:GenericScreen}
    },
    {
        headerMode: "none",
        initialRouteName: "Explore",
        
        navigationOptions:{
            tabBarVisible:false,
            header:null,
        }
    }
)

TabNav.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
    tabBarVisible:false
  };

const NavStack = createStackNavigator(
    {
        Home:{screen:TabNav},
        Details:{screen:RecipeDetailsScreen}
    },
    {
        headerMode:"none", 
    }
)

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;