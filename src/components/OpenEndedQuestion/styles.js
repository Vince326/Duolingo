import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "stretch"
    },

    row: {
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: 'center',

        margin: 10,
        marginBottom: 0
    },

    mascot: {
        width: "20%",
        aspectRatio: 3 / 4,
        marginRight: 10,
        backgroundColor: "red"
    },

    sentence: {

        fontSize: 16
    },

    sentenceContainer: {

        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 5,

        padding: 10,
    },

    textInput: {
        alignSelf: "stretch",
        flex: 1,

        backgroundColor: "#ebebeb",
        borderWidth: 1,
        borderRadius: 10,

        padding: 10,
        fontSize: 16

    }

});

export default styles;
