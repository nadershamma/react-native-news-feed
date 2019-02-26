import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./Views/HomeScreen";
import ArticleScreen from "./Views/ArticleScreen";


const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen
        },
        Article: {
            screen: ArticleScreen,
        }
    },
    {
        initialRoute: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00796B'
            },
            headerTitleStyle: {
                color: '#FFFFFF'
            }
        }
    });

export const AppContainer = createAppContainer(AppNavigator);
