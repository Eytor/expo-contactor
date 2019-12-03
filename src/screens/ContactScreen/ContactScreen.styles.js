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
    addContactButton: {
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

    icon: {
        width: 25,
        height: 25,
        color: '#fff',
    },
    noContacts: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
