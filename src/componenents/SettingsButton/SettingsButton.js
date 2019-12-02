import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './SettingsButton.styles';

const SettingButton = ({
    name, photo, phoneNumber, navigation, edit,
}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('Form', {
            name,
            photo,
            phoneNumber,
            onPress: edit,
        })}
    >
        <Icon style={styles.icon} size={25} name="settings" />
    </TouchableOpacity>
);

SettingButton.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired,
};

export default SettingButton;
