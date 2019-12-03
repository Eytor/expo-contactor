import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import AntIcon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../../resources/defaultStyles';
import styles from './FormScreen.styles';

class Form extends Component {
    constructor(probs) {
        super(probs);
        this.setPhoto = this.setPhoto.bind(this);
        this.AlertSelector = this.AlertSelector.bind(this);
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

    AlertSelector(navigation) {
        // eslint-disable-next-line no-unused-expressions
        Alert.alert('Add Image',
            'Choose Alternative',
            [
                { text: 'Camera', onPress: () => navigation.navigate('Camera', { savePhoto: this.setPhoto }) },
                { text: 'Choose from Gallery', onPress: () => navigation.navigate('ImagePicker', { savePhoto: this.setPhoto }) },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false });
    }


    render() {
        const { navigation } = this.props;
        const { photo } = this.state;
        return (
            <KeyboardAwareScrollView
                enableOnAndroid
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={[defaultStyles.container, defaultStyles.noPadVertical]}>
                    <View style={styles.keyboardWrapper}>
                        <View style={defaultStyles.wrapper}>
                            <View style={[defaultStyles.imageWrapper, styles.imageWrapper]}>
                                <TouchableOpacity onPress={() => this.AlertSelector(navigation)}>
                                    {photo ? (
                                        <Image style={styles.image} source={{ uri: `data:image/png;base64,${photo}` }} />
                                    ) : (
                                        <AntIcon
                                            style={styles.imageIcon}
                                            size={50}
                                            name="camera"
                                            color="#FFF"
                                        />
                                    )}

                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={styles.formGroup}>
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
                                <View style={styles.formGroup}>
                                    <TextInput
                                        placeholder="Phone number"
                                        style={[defaultStyles.input, styles.input,
                                            !this.state.phoneNumber && styles.errorInput]}
                                        value={this.state.phoneNumber}
                                        keyboardType="numeric"
                                        onChangeText={(phoneNumber) => this.setState({
                                            phoneNumber,
                                        })}
                                    />
                                    {!this.state.phoneNumber && (
                                        <Text
                                            style={styles.errorText}
                                        >
                                        Phone Number is required
                                        </Text>
                                    )}
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[defaultStyles.successButton,
                                { marginRight: 15, marginBottom: 15 },
                                (!this.state.name || !this.state.phoneNumber)
                                    ? { opacity: 0.5 } : { opacity: 1 }]}
                            disabled={(!this.state.name || !this.state.phoneNumber)}
                            onPress={() => {
                                this.submit(this.state.name,
                                    this.state.phoneNumber,
                                    this.state.photo);
                            }}
                        >
                            <AntIcon name="check" size={25} style={{ color: '#fff' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

Form.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Form;
