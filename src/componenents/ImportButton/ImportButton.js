import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getPhonesContacts } from '../../services/service';
import defaultStyles from '../../resources/defaultStyles';

export default class ImportButton extends Component {
    constructor(props) {
        super(props);
        this.AlertUser = this.AlertUser.bind(this);
        this.importContacts = this.importContacts.bind(this);
        this.state = {};
    }

    /**
     * importContacts
     *
     *
     * @memberof ImportButton
     */
    async importContacts() {
        const { firstAvailableId, refresh } = this.props;
        const { status } = await Permissions.askAsync(Permissions.CONTACTS);
        if (status === 'granted') {
            getPhonesContacts(firstAvailableId).then(() => {
                refresh();
            });
        }
    }

    /**
     * AlertUser
     * function that asks you if you are sure you want to
     * import all your contacts.
     *
     * @memberof ImportButton
     */
    AlertUser() {
        Alert.alert(
            'Are you sure you want to import all contacts from phone',
            null,
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                { text: 'Yes', onPress: this.importContacts },
            ],
            { cancelable: false },
        );
    }

    render() {
        return (
            <TouchableOpacity
                style={[defaultStyles.successButton, { marginBottom: 15 }]}
                onPress={this.AlertUser}
            >
                <Icon name="import-contacts" color="#FFF" size={25} />
            </TouchableOpacity>
        );
    }
}

ImportButton.propTypes = {
    firstAvailableId: PropTypes.number.isRequired,
    refresh: PropTypes.func.isRequired,
};
