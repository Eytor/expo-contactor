import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import defaultStyles from '../../resources/defaultStyles';

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

    render() {
        return (
            <View style={defaultStyles.container}>
                <View>
                    <Text>Name</Text>
                    <TextInput
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                    />
                </View>
                <View>
                    <Text>Phone Number</Text>
                    <TextInput
                        value={this.state.phonenumber}
                        onChangeText={(phonenumber) => this.setState({ phonenumber })}
                    />
                </View>
                <View>
                    <Text>Photo</Text>
                    <TextInput
                        value={this.state.photo}
                        onChangeText={(photo) => this.setState({ photo })}
                    />
                </View>
            </View>
        );
    }
}

Form.propTypes = {
    name: PropTypes.string,
    phonenumber: PropTypes.number,
    photo: PropTypes.string,
};

Form.defaultProps = {
    name: '',
    phonenumber: null,
    photo: '',
};

export default Form;
