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
import ImportButton from '../../componenents/ImportButton/ImportButton';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
        this.edit = this.edit.bind(this);
        this.refreshContacts = this.refreshContacts.bind(this);
        this.state = {
            contactList: [],
            filteredContactList: [],
            filterString: '',
            firstAvailableId: 1,
        };
    }

    async componentWillMount() {
        // Get contacts
        getAllContacts().then((data) => {
            if (data.length > 0) {
                this.setState({
                    contactList: data,
                    filteredContactList: data,
                    firstAvailableId: (data[data.length - 1].id + 1),
                });
            }
        });
    }

    async refreshContacts() {
        getAllContacts().then((data) => {
            if (data.length > 0) {
                this.setState({
                    contactList: data,
                    filteredContactList: data,
                    firstAvailableId: (data[data.length - 1].id + 1),
                });
            }
        });
    }

    addContact(name, phoneNumber, photo) {
        const { contactList } = this.state;
        const newContact = {
            id: this.state.firstAvailableId,
            name,
            photo,
            phoneNumber,
        };
        const newContacts = [...contactList];
        newContacts.push(newContact);
        this.setState({
            contactList: newContacts,
            firstAvailableId: (this.state.firstAvailableId + 1),
        }, () => {
            this.filterContacts(this.state.filterString);
        });
        addContact(newContact);
    }

    edit(id, name, photo, phoneNumber) {
        const newContactList = this.state.contactList;
        const index = newContactList.findIndex((i) => i.id === id);
        newContactList[index] = {
            id, name, photo, phoneNumber,
        };
        this.setState({ contactList: newContactList },
            this.filterContacts(this.state.filterString));
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
                            keyExtractor={(item) => item.id.toString()}
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
                <View style={{ position: 'absolute', right: 15, bottom: 15 }}>
                    <ImportButton
                        firstAvailableId={parseInt(this.state.firstAvailableId, 10)}
                        refresh={this.refreshContacts}
                    />
                    <TouchableOpacity
                        style={defaultStyles.successButton}
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
            </View>
        );
    }
}

ContactScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ContactScreen;
