import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "stretch"
    },

    optionContainer: {
        //border styling
        borderWidth: 2,
        borderColor: "lightgrey",
        borderRadius: 15,
        borderBottomWidth: 4

        //Container Size

    },

    optionImage: {
        width: 100,
        height: 100
    },

    optionText: {

    }


});

export default styles;