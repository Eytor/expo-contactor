import React, { Component } from 'react';
import {
    View,
    TextInput,
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
