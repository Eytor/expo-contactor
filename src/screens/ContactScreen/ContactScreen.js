import React, { Component } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import FilterElement from '../../componenents/FilterElement/FilterElement';
import Styles from './ContactScreen.styles';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            filteredContactList: [],
        };
    }

    render() {
        const { filteredContactList } = this.state;
        // Má setja þetta í sér element
        const contacts = filteredContactList.map(element => (
            <View>
                <Image
                    source={require('@expo/snack-static/react-native-logo.png')}
                ></Image>
                <Text>{element.name}</Text>
            </View>
        ));
        return (
            <View style={styles.container}>
                <FilterElement filter={() => {}} label={'Contacts'} />>
                <FlatList>{contacts}</FlatList>
            </View>
        );
    }
}
export default ContactScreen;
