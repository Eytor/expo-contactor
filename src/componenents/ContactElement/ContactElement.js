import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ContactElement.styles';

const ContactElement = ({
    name, photo, phoneNumber, navigation,
}) => (
    <TouchableOpacity
        style={styles.flatlistItem}
        // eslint-disable-next-line react/prop-types
        onPress={() => navigation.navigate('ContactInfo', {
            name,
            photo,
            phoneNumber,
        })}
    >
        {photo ? (
            <Image style={styles.image} source={{ uri: `data:image/png;base64,${photo}` }} />
        ) : (
            <Icon
                style={styles.image}
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
};
ContactElement.defaultProps = {
    phoneNumber: '',
    photo: '',
};

export default ContactElement;
