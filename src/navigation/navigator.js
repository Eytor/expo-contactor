import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { View, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Form from '../screens/FormScreen/FormScreen';
import { Colors } from '../resources/resources';
import ImagePicker from '../componenents/ImagePickerElement/ImagePickerElement';
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
            navigationOptions: ({ navigation }) => ({
                headerTitle: '',
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: 'transparent',
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
                },
                headerTransparent: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    zIndex: 100,
                    backgroundColor: 'transparent',
                },
                headerTintColor: '#FFF',
                headerRight: navigation.state.params.image ? () => (
                    <View>
                        <TouchableOpacity onPress={navigation.state.params.clearPhoto}>
                            <AntIcon name="close" size={25} style={{ color: '#fff' }} />
                        </TouchableOpacity>
                    </View>
                ) : () => (
                    <View>
                        <TouchableOpacity onPress={navigation.state.params.switchType}>
                            <AntIcon name="retweet" size={25} style={{ color: '#fff' }} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRightContainerStyle: {
                    marginRight: 15,
                },
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
        ImagePicker: {
            screen: ImagePicker,
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
