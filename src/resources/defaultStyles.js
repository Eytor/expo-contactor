import { StyleSheet } from 'react-native';
import { Colors } from './resources';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.background,
        padding: 15,
    },
    input: {
        padding: 10,
        paddingLeft: 0,
        backgroundColor: Colors.background,
        fontSize: 16,
        color: '#fff',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.mainBorder,
    },
});
