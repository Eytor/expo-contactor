import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
} from 'react-native';
import FilterElement from '../../componenents/FilterElement/FilterElement';
import styles from './ContactScreen.styles';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            filteredContactList: [],
            filterString: '',
        };
    }

    componentWillMount() {
        // Get contacts
        const dummyData = [{ name: 'Jón Bjarni', phoneNumber: 6169551, photo: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p320x320/12039708_10153560434208346_7355157896497052615_n.jpg?_nc_cat=111&_nc_ohc=HRJSLEed8ysAQl84xCuVclyB3KdUy0k_--aBHobV7JXgpVOu1KV92C_Og&_nc_ht=scontent-arn2-1.xx&oh=a87f95d9789dfb11d9f06194a548c6c3&oe=5E72F1BE' }, { name: 'Toggi', phoneNumber: 7808597, photo: 'https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-1/p320x320/13394049_1332072183476066_3074423523144104912_n.jpg?_nc_cat=105&_nc_ohc=G4rLHCQiiMQAQmdQFYAoe6ShHVdGmMwtMC9imShncMaB5rk73SgsWJXGQ&_nc_ht=scontent-arn2-2.xx&oh=196be94d3f1f8a21a1cb90c627eb8c16&oe=5E86B656' }, { name: 'Eyþór', phoneNumber: 6169551, photo: 'https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-1/12592708_10207529889660799_1622688881996220725_n.jpg?_nc_cat=100&_nc_ohc=dtUOXFc-wOMAQnVCmEBaQ3H6E7obKlIvij-2t8BFAKitV9_Gb1_g5TGIg&_nc_ht=scontent-arn2-2.xx&oh=358a9ba506d67d92646cc75b208459fc&oe=5E84F5BA' }];
        this.setState({ contactList: dummyData, filteredContactList: dummyData });
    }

    addContact(name, photo, phoneNumber) {
        const { contactList } = this.state;
        const newContact = { name, photo, phoneNumber };
        const newContacts = [...contactList];
        newContacts.push(newContact);
        this.setState({ contactList: newContacts }, () => this.filterContacts(this.state.filterString));
    }

    filterContacts(text) {
        const { contactList } = this.state;
        const newContacts = [...contactList].filter(
            (element) => element.name.toLowerCase().includes(text.toLowerCase())
                || (element.phoneNumber
                    .toLowerCase()
                    .includes(text.toLowerCase())),
        );
        this.setState({ filteredContactList: newContacts, filterString: text });
    }

    render() {
        const { filteredContactList } = this.state;
        // Má setja þetta í sér element
        const contacts = filteredContactList.map((element) => (
            <View>
                <Image
                    source={{ uri: element.photo }}
                />
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
