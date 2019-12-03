import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../resources/resources';
import styles from './ContactInfoScreen.styles';
import ImageElement from '../../componenents/ImageElement/ImageElement';
import SettingsButton from '../../componenents/SettingsButton/SettingsButton';

class ContactInfoScreen extends Component {
    render() {
        const { name, phoneNumber, photo } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <SettingsButton
                    name={name}
                    phoneNumber={phoneNumber}
                    photo={photo}
                    navigation={this.props.navigation}
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
