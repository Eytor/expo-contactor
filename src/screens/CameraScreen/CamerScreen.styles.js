import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    cameraContainer: {
        flex: 1,
    },
    cameraWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 30,
    },
    flip: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    snapContainer: {
        alignSelf: 'center',
    },
    snapWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#fff',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
    },
    snapOuterBorder: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.arsenic,
        zIndex: 20,
    },
    snapBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.arsenic,
        backgroundColor: 'transparent',
    },
});
