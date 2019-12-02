import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
} from 'react-native';
import FilterElement from '../../componenents/FilterElement/FilterElement';
import Form from '../../componenents/FormElement/FormElement';
import styles from './ContactScreen.styles';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            filteredContactList: [],
            filterString: '',
            modalVisible: false,
        };
    }

    componentWillMount() {
        // Get contacts
        const dummyData = [
            {
                name: 'Jón Bjarni',
                phoneNumber: 6169551,
                photo:
                    'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p320x320/12039708_10153560434208346_7355157896497052615_n.jpg',
            },
            {
                name: 'Toggi',
                phoneNumber: 7808597,
                photo:
                    'https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-1/p320x320/13394049_1332072183476066_3074423523144104912_n.jpg',
            },
            {
                name: 'Eyþór',
                phoneNumber: 6169551,
                photo:
                    'https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-1/12592708_10207529889660799_1622688881996220725_n.jpg',
            },
        ];
        this.setState({
            contactList: dummyData,
            filteredContactList: dummyData,
        });
    }

    addContact(name, photo, phoneNumber) {
        const { contactList } = this.state;
        const newContact = { name, photo, phoneNumber };
        const newContacts = [...contactList];
        newContacts.push(newContact);
        this.setState({ contactList: newContacts }, () =>
            this.filterContacts(this.state.filterString),
        );
    }

    filterContacts(text) {
        const { contactList } = this.state;
        const newContacts = [...contactList].filter(
            element =>
                element.name.toLowerCase().includes(text.toLowerCase()) ||
                element.phoneNumber.toString().includes(text),
        );
        this.setState({ filteredContactList: newContacts, filterString: text });
    }

    _keyExtractor = (item, index) => item.name;

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { filteredContactList } = this.state;
        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() =>
                        this.setModalVisible(!this.state.modalVisible)
                    }
                >

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <Text style={styles.btnText}>close</Text>
                </TouchableOpacity>
                    <Form
                        name={this.state.name}
                        phoneNumber={this.state.phoneNumber}
                        photo={this.state.photo}
                    />
                </Modal>
                <FilterElement
                    filter={text => this.filterContacts(text)}
                    label='Contacts'
                />
                <ScrollView
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                >
                    <FlatList
                        data={filteredContactList}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item }) => {
                            console.log(item.photo);
                            return (
                                <View>
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderWidth: 1,
                                            borderColor: 'blue',
                                        }}
                                        source={{ uri: item.photo }}
                                    />
                                    <Text>{item.name}</Text>
                                </View>
                            );
                        }}
                    />
                </ScrollView>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <Text style={styles.btnText}>Add item!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ContactScreen;
