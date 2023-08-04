import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import styles from './styles';
import WordOption from '../WordOption';


const SentenceCompletion = ({ question, onCorrect, onWrong }) => {

    const onButtonPress = () => {

    }

    return (
        <>
            <Text style={styles.title}> Complete the Sentence</Text>
            <View style={styles.row}>
                <Text> w vert foo jaoe</Text>
                <View style={styles.blank}></View>
            </View>

            <View style={styles.optionsContainer}>

                <WordOption text={"1"} />

            </View>

            <Button text="Check" onPress={onButtonPress} disabled={!input} />

        </>

    )
};
