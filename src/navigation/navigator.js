import { createStackNavigator } from 'react-navigation-stack';
import Form from '../screens/FormScreen/FormScreen';
import ContactScreen from '../screens/ContactScreen/ContactScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen/ContactInfoScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: ContactScreen,
        },
        ContactInfo: {
            screen: ContactInfoScreen,
        },
        Form: {
            screen: Form,
        },
    },
    {
        initialRouteName: 'Home',
    },
);
export default AppNavigator;
