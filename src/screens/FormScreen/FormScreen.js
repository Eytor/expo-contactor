import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import defaultStyles from '../../resources/defaultStyles';
import styles from './FormScreen.styles';

class Form extends Component {
    constructor(probs) {
        super(probs);
        this.setPhoto = this.setPhoto.bind(this);
        this.state = {
            name: null,
            phonenumber: null,
            photo: null,
        };
    }

    componentWillMount() {
        this.setState({
            name: this.props.name,
            phonenumber: this.props.phonenumber,
            photo: this.props.photo,
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
            <View style={defaultStyles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Camera', { savePhoto: this.setPhoto })}>
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

                </TouchableOpacity>

                <View>
                    <TextInput
                        style={[defaultStyles.input, styles.input]}
                        placeholder="Name"
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Phone number"
                        style={[defaultStyles.input, styles.input]}
                        value={this.state.phonenumber}
                        keyboardType="numeric"
                        onChangeText={(phonenumber) => this.setState({ phonenumber })}
                    />
                </View>
                <TouchableOpacity
                    // style={styles.addContactButton}
                    onPress={() => {
                        this.submit(this.state.name, this.state.photo, this.state.phonenumber);
                    }}
                >
                    <Text style={styles.btnText}>Add item!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Form.propTypes = {
    name: PropTypes.string,
    phonenumber: PropTypes.string,
    photo: PropTypes.string,
    navigation: PropTypes.object.isRequired,
};

Form.defaultProps = {
    name: '',
    phonenumber: '',
    photo: '',
};

export default Form;
