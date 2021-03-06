import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../resources/resources';
import defaultStyles from '../../resources/defaultStyles';
import styles from './ContactInfoScreen.styles';
import ImageElement from '../../componenents/ImageElement/ImageElement';
import SettingsButton from '../../componenents/SettingsButton/SettingsButton';
import { editContact, handleCall } from '../../services/service';

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
            background: '#000',
        };
    }

    componentWillMount() {
        const {
            name,
            phoneNumber,
            photo,
            id,
            background,
        } = this.props.navigation.state.params;
        this.setState({
            oldName: name,
            name,
            phoneNumber,
            photo,
            id,
            background,
        });
    }

    // check if contact has been edited and if so replace the contact in the list
    componentWillUnmount() {
        if (this.state.isEdited) {
            this.props.navigation.state.params.edit(
                this.state.id,
                this.state.name,
                this.state.photo,
                this.state.phoneNumber,
            );
        }
    }

    /**
     * Function that saves the edited contact calls
     * the service to replace the corresponding json file
     *
     * @param {string} name - new name of contact
     * @param {number} phoneNumber - new phone number of contact
     * @param {string} photo - new photo of contact as base64 string
     * @memberof ContactInfoScreen
     */
    saveContact(name, phoneNumber, photo) {
        this.setState(
            {
                name,
                phoneNumber,
                photo,
                isEdited: true,
            },
            () => editContact({
                id: this.state.id,
                oldName: this.state.oldName,
                name,
                phoneNumber,
                photo,
            }),
        );
    }

    render() {
        const {
            name,
            phoneNumber,
            photo,
            background,
        } = this.state;
        return (
            <View
                style={[defaultStyles.container, defaultStyles.noPadVertical]}
            >
                <View style={defaultStyles.wrapper}>
                    <View style={[defaultStyles.imageWrapper, { backgroundColor: background }]}>
                        <ImageElement photo={photo} />
                    </View>
                    <View style={styles.metaWrapper}>
                        <View>
                            <Text style={styles.name}>{name}</Text>
                        </View>
                        <View>
                            <Text style={styles.phoneNumber}>
                                {phoneNumber}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            style={styles.phoneWrapper}
                            onPress={() => handleCall(this.state.phoneNumber)}
                        >
                            <Icon
                                style={styles.icon}
                                size={25}
                                name="phone"
                                color={Colors.success}
                            />
                        </TouchableOpacity>
                        <SettingsButton
                            name={name}
                            phoneNumber={phoneNumber}
                            photo={photo}
                            navigation={this.props.navigation}
                            edit={this.saveContact}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ContactInfoScreen;
