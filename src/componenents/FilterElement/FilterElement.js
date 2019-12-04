import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icon/FontAwesome5';
import styles from '../../resources/defaultStyles';

const FilterElement = ({ filter, label }) => (
    <View>
        <Icon name="search" color="#FFF" />
        <TextInput placeholder={`Search ${label}`} style={styles.input} onChangeText={(text) => filter(text)} />
    </View>
);

FilterElement.propTypes = {
    filter: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default FilterElement;
