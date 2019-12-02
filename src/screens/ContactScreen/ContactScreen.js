import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
} from 'react-native';
import FilterElement from '../../componenents/FilterElement/FilterElement';
import styles from './ContactScreen.styles';

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
        const contacts = filteredContactList.map((element) => (
            <View>
                <Text>{element.name}</Text>
            </View>
        ));
        return (
            <View style={styles.container}>
                <FilterElement filter={() => {}} label="Contacts" />
                <FlatList>{contacts}</FlatList>
            </View>
        );
    }
}
export default ContactScreen;
