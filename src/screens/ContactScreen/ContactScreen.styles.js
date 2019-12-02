import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.background,
        padding: 15,
        position: 'relative',
    },
    flatlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.mainBorder,
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
});
