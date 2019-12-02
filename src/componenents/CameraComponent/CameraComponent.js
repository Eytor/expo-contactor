import React from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

class CameraComponent extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    }

    render() {
        const {hasCameraPermission} = this.state;
        return (
            {
                hasCameraPermission ? <Camera /> :<></>
            }
        );
    }
}

export default CameraExample;