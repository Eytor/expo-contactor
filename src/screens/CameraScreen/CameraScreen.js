import React from 'react';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import { Camera } from 'expo-camera';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

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
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    style={{ flex: 1 }}
                    type={this.state.type}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
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
                            <Text
                                style={{
                                    fontSize: 18,
                                    marginBottom: 10,
                                    color: 'white',
                                }}
                            >
                                Flip
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={this.snap}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    marginBottom: 10,
                                    color: 'white',
                                }}
                            >
                                Take photo
                            </Text>
                        </TouchableOpacity>
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
