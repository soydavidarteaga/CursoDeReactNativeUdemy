import {createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation'
import GenericScreen from '../Containers/GenericScreen'
import ExploreScreen from "../Containers/ExploreScreen"
import CategoriesScreen from "../Containers/CategoriesScreen"
import RecipeDetailsScreen from '../Containers/RecipeDetailsScreen';
import FavoriteScreen from '../Containers/FavoriteScreen';
import CategoryScreen from '../Containers/CategoryScreen';
import InfoScreen from '../Containers/InfoScreen';
import SideMenu from "../Components/SideMenu"


const TabNav =  createBottomTabNavigator(
    {
        Explore:{screen:ExploreScreen},
        Categories:{screen:CategoriesScreen},
        Favorites:{screen:FavoriteScreen}
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

const DrawerNavigator = createDrawerNavigator({
    Tab:{
        screen: TabNav
    },
    Info:{
        screen:InfoScreen
    }
},{
    initialRouteName: 'Tab',
    contentComponent: SideMenu,
    drawerWidth: 300
});

TabNav.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
    tabBarVisible:false
  };



const NavStack = createStackNavigator(
    {
        Home:{screen:DrawerNavigator},
        Details:{screen:RecipeDetailsScreen},
        Category:{screen:CategoryScreen}
    },
    {
        headerMode:"none", 
    }
)

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;