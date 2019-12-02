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
        borderColor: Colors.mainBorder,
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
});
