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
            phoneNumber: null,
            photo: null,

        };
    }

    componentWillMount() {
        const { name, phoneNumber, photo } = this.props.navigation.state.params;
        console.log(this.props.navigation.state.params);
        this.setState({
            name,
            phoneNumber,
            photo,
        });
    }

    submit(name, phoneNumber, photo) {
        const { onPress } = this.props.navigation.state.params;
        console.log(onPress);
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
                        value={this.state.phoneNumber}
                        keyboardType="numeric"
                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
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
                        this.submit(this.state.name, this.state.photo, this.state.phoneNumber);
                    }}
                >
                    <Text style={styles.btnText}>Add item!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Form.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Form;
