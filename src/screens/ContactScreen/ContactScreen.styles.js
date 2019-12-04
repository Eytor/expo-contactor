import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
        color: '#fff',
    },
    noContacts: {
        color: Colors.gray,
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'left',
        marginTop: 15,
        paddingLeft: 15,
    },
});
