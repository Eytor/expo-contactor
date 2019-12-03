import React from 'react';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import { Camera } from 'expo-camera';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './CamerScreen.styles';

class CameraScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        };
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
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
        });
    }


    snap = async () => {
        if (this.camera) {
            const photo = await this.camera.takePictureAsync({ base64: true });
            this.props.navigation.state.params.savePhoto(photo.base64);
            this.props.navigation.pop();
        }
    };

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
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
