import { StyleSheet } from 'react-native';
import { Colors } from '../../resources/resources';


export default StyleSheet.create({
    input: {
        padding: 5,
        marginBottom: 5,
        backgroundColor: 'transparent',
        borderColor: Colors.success,
    },
    imageWrapper: {
        backgroundColor: Colors.arsenic,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    formGroup: {
        marginTop: 15,
    },
    keyboardWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    errorInput: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.error,
    },
    errorText: {
        color: Colors.error,
    },
});
