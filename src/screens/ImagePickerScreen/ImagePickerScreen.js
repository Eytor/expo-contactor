import React, { Component } from 'react';
import {
    Image, View, Alert, TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import AntIcon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../../resources/defaultStyles';

class ImagePickerScreen extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            image: null,
        };
    }

    async componentDidMount() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                Alert.alert('Sorry, we need camera roll permissions to make this work!');
            } else {
                this._pickImage();
            }
        } else {
            this._pickImage();
        }
    }


    _pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.base64 });
        }
    };

    submit() {
        this.props.navigation.state.params.savePhoto(this.state.image);
        this.props.navigation.pop();
    }

    render() {
        const { image } = this.state;

        return (
            <View style={{ flex: 1, width: '100%' }}>
                <Image style={{ flex: 1, width: '100%' }} source={{ uri: `data:image/png;base64,${image}` }} />
                <TouchableOpacity
                    style={[defaultStyles.successButton, { position: 'absolute', right: 15, bottom: 15 }]}
                    onPress={() => this.submit()}
                >
                    <AntIcon name="check" size={25} style={{ color: '#fff' }} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ImagePickerScreen;