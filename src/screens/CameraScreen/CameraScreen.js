import React from 'react';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import { Camera } from 'expo-camera';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../../resources/defaultStyles';
import styles from './CamerScreen.styles';


class CameraScreen extends React.Component {
    constructor(props) {
        super(props);
        this.returnImage = this.returnImage.bind(this);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            image: null,
        };
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
        this.updateHeader();
    }

    /**
     * Function that takes a photo from camera and adds it to state as base64 string
     * and calls update header
     *
     * @memberof CameraScreen
     */
    snap = async () => {
        if (this.camera) {
            const photo = await this.camera.takePictureAsync({ base64: true });
            this.setState({
                image: photo.base64,
            });
        }

        this.updateHeader();
    };

    /**
     * Function that updates header with whether it has a button
     * that turns the camera around or discards image
     *
     * @memberof CameraScreen
     */
    updateHeader = () => {
        this.props.navigation.setParams({
            switchType: () => {
                this.setState({
                    type:
                        this.state.type
                            === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                });
            },
            image: this.state.image != null,
            clearPhoto: () => this.setState({ image: null }, () => this.updateHeader()),
        });
    }

    /**
     * Function that pops the navigation stack and calls a
     * passed in funtion to return the image to previous screen
     *
     * @memberof CameraScreen
     */
    returnImage() {
        const { state, pop } = this.props.navigation;
        state.params.savePhoto(this.state.image);
        pop();
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        if (this.state.image) {
            return (
                <View style={{ flex: 1, width: '100%' }}>
                    <Image style={{ flex: 1, width: '100%' }} source={{ uri: `data:image/png;base64,${this.state.image}` }} />
                    <TouchableOpacity
                        style={[defaultStyles.successButton, { position: 'absolute', right: 15, bottom: 15 }]}
                        onPress={this.returnImage}
                    >
                        <Icon name="check" size={25} style={{ color: '#fff' }} />
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <Camera
                style={styles.cameraContainer}
                ref={(ref) => {
                    this.camera = ref;
                }}
                type={this.state.type}
            >
                <View style={styles.cameraWrapper}>
                    <View>
                        <TouchableOpacity
                            style={styles.snapContainer}
                            onPress={this.snap}
                        >
                            <View style={styles.snapWrapper}>
                                <View style={styles.snapOuterBorder} />
                                <View style={styles.snapBtn} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        );
    }
}

CameraScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default CameraScreen;
