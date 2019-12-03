import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ImageElement.styles';

const ImageElement = ({
    photo,
}) => (
    <View>
        {photo ? (
            <Image
                style={styles.image}
                source={{ uri: `data:image/png;base64,${photo}` }}
            />

        ) : (
            <Icon
                styles={styles.image}
                size={100}
                name="user-circle"
                color="#FFF"
            />
        )}
    </View>
);

ImageElement.propTypes = {
    photo: PropTypes.string.isRequired,
};

export default ImageElement;
