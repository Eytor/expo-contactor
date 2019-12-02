import { createStackNavigator } from 'react-navigation-stack';
import ContactScreen from '../screens/ContactScreen/ContactScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: ContactScreen,
        },
    },
    {
        initialRouteName: 'Home',
    },
);
export default AppNavigator;
