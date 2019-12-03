import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';


export default StyleSheet.create({
    input: {
        padding: 5,
        marginBottom: 15,
        backgroundColor: 'transparent',
        borderColor: Colors.gray,
    },
    imageWrapper: {
        backgroundColor: Colors.arsenic,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    image: {
        width: 50,
        height: 50,
    },
    formGroup: {
        marginTop: 30,
    },
});
