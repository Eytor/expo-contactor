import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
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
