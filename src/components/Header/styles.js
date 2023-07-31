import react from "react";
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    root: {
        flexDirection: "row",
        alignItems: "center"
    },

    heartIcon: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },

    lives: {
        color: "red",
        fontWeight: "bold",
        marginHorizontal: 10,
        fontSize: 17
    }
});
