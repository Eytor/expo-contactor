import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    Animated,
    PanResponder,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ContactElement.styles';
import { Colors } from '../../resources/resources';
import { handleCall } from '../../services/service';

const { width } = Dimensions.get('window');

class ContactElement extends Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY();
        this.PanResponder = null;
        this.state = {
            defaultValue: 0,
        };
    }

    componentWillMount() {
        this.PanResponder = this.initalizePanResponder();
    }

    /**
     * Function that handles swipes, used for swipe to call
     *
     * @memberof ContactElement
     */
    initalizePanResponder = () => PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            this.position.setValue({ x: gestureState.dx, y: 0 });
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > width / 3) {
                handleCall(this.props.phoneNumber);
            }
            Animated.spring(this.position, {
                toValue: this.state.defaultValue,
                duration: 1000,
            }).start();
        },
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            const { dx } = gestureState;
            const dy = 0;
            if (dx !== 0 && dy === 0) {
                return true;
            }
            return false;
        },
    });

    render() {
        const {
            name,
            photo,
            phoneNumber,
            navigation,
            id,
            edit,
            background,
        } = this.props;

        return (
            <View style={styles.border}>
                <Animated.View
                    {...this.PanResponder.panHandlers}
                    style={{
                        transform: this.position.getTranslateTransform(),
                        position: 'relative',
                        zIndex: 10,
                        backgroundColor: Colors.background,
                    }}
                >
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
                                source={{
                                    uri: `data:image/png;base64,${photo}`,
                                }}
                            />
                        ) : (
                            <Icon
                                style={[
                                    styles.image,
                                    { backgroundColor: background },
                                ]}
                                size={50}
                                name="user-circle"
                                color="#fff"
                            />
                        )}

                        <Text style={styles.itemName}>{name}</Text>
                    </TouchableOpacity>
                </Animated.View>
                <View style={styles.underView}>
                    <Icon
                        style={{ position: 'absolute', left: 0, top: 18 }}
                        size={25}
                        name="phone"
                        color={Colors.success}
                    />
                </View>
            </View>
        );
    }
}

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
    navigation: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    edit: PropTypes.func.isRequired,
    background: PropTypes.string,
    position: PropTypes.object,
    panResponder: PropTypes.object,
};
ContactElement.defaultProps = {
    phoneNumber: '',
    photo: '',
    background: '#000',
    position: {},
    panResponder: {},
};

export default ContactElement;
