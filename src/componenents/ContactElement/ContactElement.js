import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ContactElement.styles';

const ContactElement = ({
    name,
    photo,
    phoneNumber,
    navigation,
    id,
    edit,
    background,
}) => (
    <TouchableOpacity
        style={styles.flatlistItem}
        onPress={() => navigation.navigate('ContactInfo', {
            name,
            photo,
            phoneNumber,
            id,
            edit,
            background,
        })}
    >
        {photo ? (
            <Image
                style={styles.image}
                source={{ uri: `data:image/png;base64,${photo}` }}
            />
        ) : (
            <Icon
                style={[styles.image, { backgroundColor: background }]}
                size={50}
                name="user-circle"
                color="#FFF"
            />
        )}

        <Text style={styles.itemName}>{name}</Text>
    </TouchableOpacity>
);

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
    navigation: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    edit: PropTypes.func.isRequired,
    background: PropTypes.string,
};
ContactElement.defaultProps = {
    phoneNumber: '',
    photo: '',
    background: '#000',
};

export default ContactElement;
