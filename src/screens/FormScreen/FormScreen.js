import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import AntIcon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../../resources/defaultStyles';
import styles from './FormScreen.styles';

class Form extends Component {
    constructor(probs) {
        super(probs);
        this.setPhoto = this.setPhoto.bind(this);
        this.state = {
            name: null,
            phoneNumber: null,
            photo: null,
        };
    }

    componentWillMount() {
        const { name, phoneNumber, photo } = this.props.navigation.state.params;
        this.setState({
            name,
            phoneNumber,
            photo,
        });
    }

    setPhoto(base64) {
        this.setState({ photo: base64 });
    }

    submit(name, phoneNumber, photo) {
        const { onPress } = this.props.navigation.state.params;
        this.props.navigation.pop();
        onPress(name, phoneNumber, photo);
    }


    render() {
        const { navigation } = this.props;
        const { photo } = this.state;
        return (
            <View style={[defaultStyles.container, defaultStyles.noPadVertical]}>
                <View style={defaultStyles.wrapper}>
                    <View style={[defaultStyles.imageWrapper, styles.imageWrapper]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Camera', { savePhoto: this.setPhoto })}>
                            {photo ? (
                                <Image style={styles.image} source={{ uri: `data:image/png;base64,${photo}` }} />
                            ) : (
                                <AntIcon
                                    style={styles.image}
                                    size={50}
                                    name="camera"
                                    color="#FFF"
                                />
                            )}

                        </TouchableOpacity>
                    </View>
                    <View style={styles.formGroup}>
                        <View>
                            <TextInput
                                style={[defaultStyles.input, styles.input,
                                    !this.state.name && styles.errorInput]}
                                placeholder="Name"
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                            />
                            {!this.state.name && (
                                <Text style={styles.errorText}>Name is required</Text>
                            )}
                        </View>
                        <View>
                            <TextInput
                                placeholder="Phone number"
                                style={[defaultStyles.input, styles.input,
                                    !this.state.phoneNumber && styles.errorInput]}
                                value={this.state.phoneNumber}
                                keyboardType="numeric"
                                onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                            />
                            {!this.state.phoneNumber && (
                                <Text style={styles.errorText}>Phone number is required</Text>
                            )}
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={[defaultStyles.successButton,
                        (!this.state.name || !this.state.phoneNumber) && { opacity: 0.5 }]}
                    disabled={!this.state.name || !this.state.phoneNumber}
                    onPress={() => {
                        this.submit(this.state.name, this.state.phoneNumber, this.state.photo);
                    }}
                >
                    <AntIcon name="check" size={25} style={{ color: '#fff' }} />
                </TouchableOpacity>
            </View>
        );
    }
}

Form.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Form;
