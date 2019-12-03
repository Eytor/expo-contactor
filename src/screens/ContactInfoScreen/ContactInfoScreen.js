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
            <View style={[defaultStyles.container, styles.noPadVertical]}>
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapper}>
                        <ImageElement photo={photo} />
                    </View>
                    <View style={styles.metaWrapper}>
                        <View>
                            <Text style={styles.name}>{ name }</Text>
                        </View>
                        <View>
                            <Text style={styles.phoneNumber}>{ phoneNumber }</Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.phoneWrapper} onPress={() => console.log('Calling ', name)}>
                            <Icon style={styles.icon} size={25} name="phone" color={Colors.success} />
                        </TouchableOpacity>
                        <SettingsButton
                            name={name}
                            phoneNumber={phoneNumber}
                            photo={photo}
                            navigation={this.props.navigation}
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
