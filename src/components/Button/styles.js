import { StyleSheet } from "react-native/types";

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#58cc82",
        height: 50,
        marginVertical: 10,


        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",

        //borders
        borderRadius: 10,
        borderBottomWidth: 5,
        borderColor: "#57a600"
    },

    disabledContainer: {
        backgroundColor: "lightgrey",
        borderColor: "grey"
    },

    text: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",

        borderColor: "white",
        borderBottomWidth: 1.5,

    }
});

export default styles;