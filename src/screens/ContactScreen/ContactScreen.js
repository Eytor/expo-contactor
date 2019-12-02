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
                    'http://fh.is/wp-content/uploads/2017/06/jon.bjarni-e1497955997831.jpg',
            },
            {
                name: 'Toggi',
                phoneNumber: 7808597,
                photo:
                'https://img.ehf.eu/ecpictures/E6dJQfOvIeeNLqJ52Xmi63K-jtIN8kf5q9wdbm68Z_5618Vjyditu9QSwz0GjkURoTvrdzPGKP5u9_sJBCdhbbbeFb3Gf3_abMkSMrjhGrWfmoo2jmJuprtmd-gsxBMV'
            },
            {
                name: 'Eyþór',
                phoneNumber: 6169551,
                photo:
                    'http://fh.is/wp-content/uploads/2016/05/090A4405-e1536935614911-297x300.jpg',
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
                        data={filteredContactList.sort((a, b) => a.name.localeCompare(b.name))}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text>{item.name}</Text>
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                        }}
                                        source={{uri : item.photo}}
                                    />
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
