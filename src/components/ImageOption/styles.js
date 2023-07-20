import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    optionContainer: {
        //border styling
        borderWidth: 2,
        borderColor: "lightgrey",
        borderRadius: 15,
        borderBottomWidth: 4,

        //Container Size
        width: "45%",
        height: "45%",

        //spacing
        padding: 10,

        alignItems: "center"
    },

    selectedContainer: {
        backgroundColor: "#DDF4FE",
        borderColor: "#81D5FE"
    },

    selectedText: {
        color: "$40BEF7",
        fontWeight: "bold",

    },

    optionImage: {
        width: "100%",
        flex: 1,
    },

    optionText: {
        fontWeight: "bold",
        color: "Black"
    }


});

export default styles;