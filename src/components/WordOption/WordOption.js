import { View, Text } from 'react-native'
import React from 'react'

const WordOption = ({ text, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 2,
        bprderColor: "lightgray",
        borderBottomWidth: 4,
        borderRadius: 10,


        padding: 10,
        paddingHorizontal: 15,
        margin: 10
    },
    text: {

    }
});

export default WordOption


