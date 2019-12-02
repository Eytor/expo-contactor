import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ContactInfoScreen.styles';

class ContactInfoScreen extends Component {
    render() {
        const { name, phoneNumber, photo } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        borderWidth: 1,
                        borderColor: 'blue',
                    }}
                    source={{ uri: photo }}
                />
                <Text>{ name }</Text>
                <Text>{ phoneNumber }</Text>
            </View>
        );
    }
}

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ContactInfoScreen;
