import { StyleSheet } from 'react-native';
import { Colors } from './resources';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.background,
        padding: 15,
        paddingTop: 0,
        paddingBottom: 0,
        position: 'relative',
    },
    wrapper: {
        marginTop: 50,
        backgroundColor: Colors.arsenic,
        borderRadius: 30,
        padding: 30,
        marginBottom: 15,
        position: 'relative',
    },
    noPadVertical: {
        paddingVertical: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    filterContainer: {
        width: '100%',
        position: 'relative',
        justifyContent: 'flex-start',

    },
    spyglass: {
        position: 'absolute',
        width: 15,
        height: 15,
        right: 0,
        top: 18,
        transform: [{ rotateY: '180deg' }],
    },
    spyglassIcon: {
        color: Colors.gray,
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
        alignSelf: 'flex-end',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: Colors.success,
        zIndex: 100,
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: -50,
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
});
