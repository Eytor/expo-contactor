import React, { Component } from 'react';
import {
    FlatList,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import ContactElement from '../../componenents/ContactElement/ContactElement';
import FilterElement from '../../componenents/FilterElement/FilterElement';
import defaultStyles from '../../resources/defaultStyles';
import styles from './ContactScreen.styles';
import { getAllContacts, addContact } from '../../services/service';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
        this.state = {
            contactList: [],
            filteredContactList: [],
            filterString: '',
        };
    }

    async componentWillMount() {
        // Get contacts
        getAllContacts().then((data) => {
            this.setState({ contactList: data, filteredContactList: data });
        });
    }

    addContact(name, photo, phoneNumber) {
        const { contactList } = this.state;
        const newContact = { name, photo, phoneNumber };
        const newContacts = [...contactList];
        newContacts.push(newContact);
        this.setState({ contactList: newContacts }, () => {
            this.filterContacts(this.state.filterString);
        });
        addContact(newContact);
    }

    filterContacts(text) {
        const { contactList } = this.state;
        const newContacts = [...contactList].filter(
            (element) => element.name.toLowerCase().includes(text.toLowerCase())
                || element.phoneNumber.toString().includes(text),
        );
        this.setState({ filteredContactList: newContacts, filterString: text });
    }

    render() {
        const { filteredContactList } = this.state;
        return (
            <View style={defaultStyles.container}>
                <FilterElement
                    filter={(text) => this.filterContacts(text)}
                    label="Contacts"
                />
                <ScrollView>
                    <FlatList
                        data={filteredContactList.sort((a, b) => a.name.localeCompare(b.name))}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <ContactElement
                                name={item.name}
                                phoneNumber={item.phoneNumber}
                                photo={item.photo}
                                navigation={this.props.navigation}
                            />
                        )}
                    />
                </ScrollView>
                <TouchableOpacity
                    style={styles.addContactButton}
                    // eslint-disable-next-line react/prop-types
                    onPress={() => this.props.navigation.navigate('Form', {
                        name: '',
                        photo: '',
                        phoneNumber: '',
                        onPress: this.addContact,
                    })}
                >
                    <Icon style={styles.icon} size={25} name="plus" />
                </TouchableOpacity>
            </View>
        );
    }
}

ContactScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ContactScreen;
