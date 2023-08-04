import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "stretch"
    },

    row: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginVertical: 10

    },

    blank: {
        borderBottomWidth: 2,
        backgroundColor: "grey",
        width: 100,

    },

    optionsContainer: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

});

export default styles;