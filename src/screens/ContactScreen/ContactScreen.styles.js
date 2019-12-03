import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    flatlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.arsenic,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    itemName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },

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
    },
});
