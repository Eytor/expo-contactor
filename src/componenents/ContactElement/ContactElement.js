import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './ContactElement.styles';

const ContactElement = ({
    name, photo, phoneNumber, navigation,
}) => (
    <TouchableOpacity
        style={styles.flatlistItem}
        // eslint-disable-next-line react/prop-types
        onPress={() => navigation.navigate(
            'ContactInfo',
            {
                name,
                photo,
                phoneNumber,
            },
        )}
    >
        <Image
            style={styles.image}
            source={{ uri: photo }}
        />
        <Text style={styles.itemName}>{name}</Text>
    </TouchableOpacity>
);

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default ContactElement;
