import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import defaultStyles from '../../resources/defaultStyles';
import styles from './FormScreen.styles';

class Form extends Component {
    constructor(probs) {
        super(probs);
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

    submit(name, phoneNumber, photo) {
        const { onPress } = this.props.navigation.state.params;
        this.props.navigation.pop();
        onPress(name, phoneNumber, photo);
    }


    render() {
        return (
            <View style={defaultStyles.container}>
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
                        onChangeText={(phonenumber) => this.setState({ phonenumber })}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Photo"
                        style={[defaultStyles.input, styles.input]}
                        value={this.state.photo}
                        onChangeText={(photo) => this.setState({ photo })}
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
    phonenumber: PropTypes.number,
    photo: PropTypes.string,
    navigation: PropTypes.object.isRequired,
};

Form.defaultProps = {
    name: '',
    phonenumber: null,
    photo: '',
};

export default Form;
