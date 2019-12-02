import { createStackNavigator } from 'react-navigation-stack';
import ContactScreen from '../screens/ContactScreen/ContactScreen';
import CameraComponent from '../componenents/CameraComponent/CameraComponent';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: ContactScreen,
        },
        Camera: {
            screen: CameraComponent,
        },
    },
    {
        initialRouteName: 'Home',
    },
);
export default AppNavigator;
