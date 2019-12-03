import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import { getPhonesContacts } from '../../services/service';

export default class ImportButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // eslint-disable-next-line class-methods-use-this
    async importContacts() {
        const { firstAvailableId, refresh } = this.props;
        const { status } = await Permissions.askAsync(Permissions.CONTACTS);
        if (status === 'granted') {
            getPhonesContacts(firstAvailableId).then(() => {
                refresh();
            });
        }
    }

    render() {
        return (
            <TouchableOpacity style={{ backgroundColor: 'purple' }} onPress={() => this.importContacts()}><Text>Import Contacts</Text></TouchableOpacity>
        );
    }
}

ImportButton.propTypes = {
    firstAvailableId: PropTypes.number.isRequired,
    refresh: PropTypes.func.isRequired,
};
