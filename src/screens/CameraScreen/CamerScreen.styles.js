import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    cameraContainer: {
        flex: 1,
        width: '100%',
    },
    cameraWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 15,
        paddingBottom: 30,
    },
    snapContainer: {
        alignSelf: 'center',
    },
    snapWrapper: {
        width: 70,
        height: 70,
        borderRadius: 35,
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
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: Colors.arsenic,
        zIndex: 20,
    },
    snapBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.arsenic,
        backgroundColor: 'transparent',
    },
});
