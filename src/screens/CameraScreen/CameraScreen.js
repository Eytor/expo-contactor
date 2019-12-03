import React from 'react';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import { Camera } from 'expo-camera';
import { Text, View, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-navigation';
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
            <SafeAreaView style={{ flex: 1 }}>
                <Camera
                    style={styles.cameraContainer}
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    type={this.state.type}
                >
                    <View style={styles.cameraWrapper}>
                        <View style={styles.flip}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        type:
                                            this.state.type
                                            === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back,
                                    });
                                }}
                            >
                                <AntIcon name="retweet" size={25} style={{ color: '#fff'}} />
                            </TouchableOpacity>
                        </View>
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
            </SafeAreaView>
        );
    }
}

CameraScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default CameraScreen;
