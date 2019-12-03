import { StyleSheet } from 'react-native';
import { Colors } from './resources';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.background,
        padding: 15,
    },
    wrapper: {
        marginTop: 50,
        backgroundColor: Colors.arsenic,
        borderRadius: 30,
        padding: 30,
        position: 'relative',
    },
    noPadVertical: {
        paddingVertical: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    input: {
        padding: 10,
        paddingLeft: 0,
        backgroundColor: Colors.background,
        fontSize: 16,
        color: '#fff',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.arsenic,
    },
    successButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        position: 'absolute',
        right: 15,
        bottom: 15,
        borderRadius: 50,
        backgroundColor: Colors.success,
        zIndex: 100,
    },
    imageWrapper: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -50,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
