import { createStackNavigator } from 'react-navigation-stack';
import Form from '../screens/FormScreen/FormScreen';
import { Colors } from '../resources/resources';
import ContactScreen from '../screens/ContactScreen/ContactScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen/ContactInfoScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: ContactScreen,
            navigationOptions: () => ({
                headerTitle: 'Contacts',
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: Colors.background,
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
                },
            }),
        },
        Camera: {
            screen: CameraScreen,
            navigationOptions: () => ({
                headerTitle: '',
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: Colors.background,
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
                },
                headerTintColor: '#FFF',
            }),
        },
        ContactInfo: {
            screen: ContactInfoScreen,
            navigationOptions: () => ({
                headerTitle: '',
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: Colors.background,
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
                },
                headerTintColor: '#FFF',
            }),
        },
        Form: {
            screen: Form,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title,
                    headerTitleStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: Colors.background,
                        shadowColor: 'transparent',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        elevation: 0,
                    },
                    headerTintColor: '#FFF',
                };
            },
        },
    },
    {
        initialRouteName: 'Home',
    },
);
export default AppNavigator;
