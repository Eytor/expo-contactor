import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';

export default StyleSheet.create({
    flatlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 5,
    },
    border: {
        position: 'relative',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.arsenic,
        marginHorizontal: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        overflow: 'hidden',
    },
    itemName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
    },
    underView: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 0,
        marginHorizontal: 15,
    }
});
