import react from "react";
import { View, Text, TextInput, useState } from 'react-native';
import styles from "./styles";

import mascot from './assets/images/mascot.png';
import Button from "../Button";
import propTypes from "prop-types";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {

    const [input, setInput] = useState("");

    const onButtonPress = () => {
        console.warn(input)
        if (question.answer.toLowercase().trim() === input.toLowercase().trim()) {
            onCorrect();
        } else {
            onWrong();
        }
        setInput("");
    }
    return (
        <>
            <Text style={styles.title}>Translate this sentence</Text>
            <View style={styles.row}>
                <Image
                    source={mascot}
                    style={styles.mascot}
                    resizeMode="contain" />

                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.Text}</Text>
                </View>

            </View>

            {/* Sentence Container*/}
            <TextInput value={input}
                placeholder="Type in English"
                style={styles.TextInput}
                onChangeText={(changedValue) => setInput(changedValue)}
                textAlignVertical="top"
                multiline />

            <Button text="Check" onPress={onButtonPress} disabled={!input} />

        </>

    );
}

OpenEndedQuestion.proptypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    answer: PropTypes.string.isRequired

}

export default OpenEndedQuestion;