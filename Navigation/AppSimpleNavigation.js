import {createStackNavigator, createBottonTabNavigation} from 'react-navigation'
import GenericScreen from '../Containers/GenericScreen'

const TabNav =  createBottonTabNavigation({
    Expore:{screen:GenericScreen},
    Categories:{screen:GenericScreen},
    Favorites:{screen:GenericScreen}
})

const AppSimpleNavigator = createStackNavigator(
    {
        Home:{screen:GenericScreen}
    },
    {
        headerMode:"none"
    }
)

export default AppSimpleNavigator;