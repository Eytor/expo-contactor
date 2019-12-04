import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import defaultStyles from '../../resources/defaultStyles';

const FilterElement = ({ filter, label }) => (
    <View style={defaultStyles.filterContainer}>
        <TextInput placeholder={`Search ${label}`} style={[defaultStyles.input, { paddingRight: 20 }]} onChangeText={(text) => filter(text)} />
        <View style={defaultStyles.spyglass}>
            <Icon name="search" size={15} style={defaultStyles.spyglassIcon} />
        </View>
    </View>
);

FilterElement.propTypes = {
    filter: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default FilterElement;
