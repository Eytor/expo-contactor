import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../resources/resources';
import defaultStyles from '../../resources/defaultStyles';
import styles from './ContactInfoScreen.styles';
import ImageElement from '../../componenents/ImageElement/ImageElement';
import SettingsButton from '../../componenents/SettingsButton/SettingsButton';

class ContactInfoScreen extends Component {
    render() {
        const { name, phoneNumber, photo } = this.props.navigation.state.params;
        return (
            <View style={[defaultStyles.container, styles.noPadVertical]}>
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapper}>
                        <ImageElement photo={photo} />
                    </View>
                    <View style={styles.metaWrapper}>
                        <View>
                            <Text style={styles.name}>{ name }</Text>
                        </View>
                        <View>
                            <Text style={styles.phoneNumber}>{ phoneNumber }</Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.phoneWrapper} onPress={() => console.log('Calling ', name)}>
                            <Icon style={styles.icon} size={25} name="phone" color={Colors.success} />
                        </TouchableOpacity>
                        <SettingsButton
                            name={name}
                            phoneNumber={phoneNumber}
                            photo={photo}
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

ContactInfoScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ContactInfoScreen;
