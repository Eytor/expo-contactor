import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
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
    imageWrapper: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -50,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    name: {
        marginTop: 30,
        marginBottom: 15,
        fontSize: 20,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
    },
    phoneNumber: {
        color: Colors.gray,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
    },
    metaWrapper: {
        justifyContent: 'center',
        marginBottom: 30,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
