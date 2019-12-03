import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../resources/resources';
import styles from './ContactInfoScreen.styles';
import ImageElement from '../../componenents/ImageElement/ImageElement';
import SettingsButton from '../../componenents/SettingsButton/SettingsButton';
import { editContact } from '../../services/service';

class ContactInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.saveContact = this.saveContact.bind(this);
        this.state = {
            id: null,
            oldName: '',
            phoneNumber: null,
            photo: '',
            isEdited: false,
            name: '',
        };
    }

    componentWillMount() {
        const {
            name, phoneNumber, photo, id,
        } = this.props.navigation.state.params;
        this.setState({
            oldName: name,
            name,
            phoneNumber,
            photo,
            id,
        });
    }

    componentWillUnmount() {
        if (this.state.isEdited) {
            // call update in main screen
        }
    }

    saveContact(name, phoneNumber, photo) {
        console.log('editing ', name);
        this.setState({
            name,
            phoneNumber,
            photo,
            isEdited: true,
        }, () => editContact({
            id: this.state.id, oldName: this.state.oldName, name, phoneNumber, photo,
        }));
    }

    render() {
        const {
            name, phoneNumber, photo,
        } = this.state;
        return (
            <View style={styles.container}>
                <SettingsButton
                    name={name}
                    phoneNumber={phoneNumber}
                    photo={photo}
                    navigation={this.props.navigation}
                    edit={(a, b, c) => this.saveContact(a, b, c)}
                />
                <ImageElement photo={photo} />
                <Text style={styles.name}>{ name }</Text>
                <TouchableOpacity style={styles.phoneWrapper} onPress={() => console.log('Calling ', name)}>
                    <Icon style={styles.icon} size={25} name="phone" color={Colors.success} />
                    <Text style={styles.phoneNumber}>{ phoneNumber }</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ContactInfoScreen;
