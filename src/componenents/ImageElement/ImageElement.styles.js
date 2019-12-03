import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    phoneNumber: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#fff',
    },
    phoneWrapper: {
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 10,
        paddingTop: 6,
    },
});
