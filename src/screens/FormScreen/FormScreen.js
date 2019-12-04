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
import Icon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../../resources/defaultStyles';
import styles from './FormScreen.styles';

class Form extends Component {
    constructor(probs) {
        super(probs);
        this.setPhoto = this.setPhoto.bind(this);
        this.AlertSelector = this.AlertSelector.bind(this);
        this.submit = this.submit.bind(this);
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

    /**
     * Function that takes in the photo as base64 and sets it to state.
     *
     * @param {string} base64 - new photo
     * @memberof Form
     */
    setPhoto(base64) {
        this.setState({ photo: base64 });
    }

    /**
     * Function that submits the form with fields
     * and calls the passed in function onpress to save it.
     *
     * @param {string} name - name of contact
     * @param {number} phoneNumber - phone number of Contact
     * @param {string} photo - photo as base64
     * @memberof Form
     */
    submit() {
        const { onPress } = this.props.navigation.state.params;
        this.props.navigation.pop();
        onPress(this.state.name, this.state.phoneNumber, this.state.photo);
    }

    /**
     * Funtion that let you choose when adding photo to contact
     * whether you want to take a new photo or select already
     * existing photo from Camera roll/Gallery.
     *
     * @param {object} navigation - navigation object
     * @memberof Form
     */
    AlertSelector() {
        const { navigation } = this.props;
        Alert.alert('Add Image',
            'Choose Alternative',
            [
                { text: 'Camera', onPress: () => navigation.navigate('Camera', { savePhoto: this.setPhoto }) },
                { text: 'Choose from Gallery', onPress: () => navigation.navigate('ImagePicker', { savePhoto: this.setPhoto }) },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: false });
    }


    render() {
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
                                <TouchableOpacity onPress={this.AlertSelector}>
                                    {photo ? (
                                        <Image style={styles.image} source={{ uri: `data:image/png;base64,${photo}` }} />
                                    ) : (
                                        <Icon
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
                            onPress={this.submit}
                        >
                            <Icon name="check" size={25} style={{ color: '#fff' }} />
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
