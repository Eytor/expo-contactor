import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import FilterElement from '../../componenents/FilterElement/FilterElement';
import defaultStyles from '../../resources/defaultStyles';
import styles from './ContactScreen.styles';
import Icon from 'react-native-vector-icons/AntDesign';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this)
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

    render() {
        const { filteredContactList } = this.state;
        return (
            <View style={defaultStyles.container}>
                <FilterElement
                    filter={text => this.filterContacts(text)}
                    label='Contacts'
                />
                <ScrollView>
                    <FlatList
                        data={filteredContactList.sort((a, b) => a.name.localeCompare(b.name))}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.flatlistItem} onPress={() => this.props.navigation.navigate('ContactInfo', {name: item.name, photo: item.photo, phoneNumber: item.phoneNumber, submit: this.addContact })}>
                                    <Image
                                        style={styles.image}
                                        source={{uri : item.photo}}
                                    />
                                    <Text style={styles.itemName}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </ScrollView>
                <TouchableOpacity
                    style={styles.addContactButton}
                    onPress={() => this.props.navigation.navigate('Form', {name: '', photo: '', phoneNumber: ''})}
                >
                    <Icon style={styles.icon} size={25}  name="plus" />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ContactScreen;
