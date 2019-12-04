import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ImageElement.styles';

const ImageElement = ({
    photo,
}) => {
    if (photo) {
        return (
            <Image
                style={styles.image}
                source={{ uri: `data:image/png;base64,${photo}` }}
            />
        );
    }
    return (
        <Icon
            styles={styles.image}
            size={100}
            name="user-circle"
            color="#FFF"
        />
    );
};

ImageElement.propTypes = {
    photo: PropTypes.string,
};

ImageElement.defaultProps = {
    photo: null,
};

export default ImageElement;
