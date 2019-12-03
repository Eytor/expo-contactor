import React, { Component } from 'react';
import {
    FlatList,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
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
        this.edit = this.edit.bind(this);
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

    addContact(name, phoneNumber, photo) {
        const { contactList } = this.state;
        let id = 1;
        if (contactList.length > 0) {
            id = contactList[contactList.length - 1].id + 1;
        }
        const newContact = {
            id, name, photo, phoneNumber,
        };
        const newContacts = [...contactList];
        newContacts.push(newContact);
        this.setState({ contactList: newContacts }, () => {
            this.filterContacts(this.state.filterString);
        });
        addContact(newContact);
    }

    edit(id, name, photo, phoneNumber) {
        const { contactList } = this.state;
        let newContactList = [...contactList]
        const index = newContactList.findIndex(i => i.id === id);
        newContactList[index] = {
            id, name, photo, phoneNumber,
        };
        this.setState({contactList: newContactList}, this.filterContacts(this.state.filterString));
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
                    {filteredContactList.length !== 0 ? (
                        <FlatList
                            data={filteredContactList.sort((a, b) => a.name.localeCompare(b.name))}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <ContactElement
                                    id={item.id}
                                    name={item.name}
                                    phoneNumber={item.phoneNumber}
                                    photo={item.photo}
                                    navigation={this.props.navigation}
                                    edit={this.edit}
                                />
                            )}
                        />
                    ) : (
                        <View>
                            <Text style={styles.noContacts}>No contacts found!</Text>
                        </View>
                    )}
                </ScrollView>
                <TouchableOpacity
                    style={defaultStyles.successButton}
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
