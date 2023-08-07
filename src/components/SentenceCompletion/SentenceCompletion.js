import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import styles from './styles';
import WordOption from '../WordOption';


const SentenceCompletion = ({ question, onCorrect, onWrong }) => {
    const [selected, setSelected] = useState(null);

    const onButtonPress = () => {
        if (selected === question.correct) {
            onCorrect();
        } else {
            onWrong();

        }
        setSelected(null);
    }

    return (
        <>
            <Text style={styles.title}> Complete the Sentence</Text>
            <View style={styles.row}>
                {question.pieces.map((piece) => {
                    if (piece.isBlank) {
                        return (
                            <View style={styles.blank}>
                                {selected && (
                                    <WordOption text={option}
                                        isSelected={selected === option}
                                        onPress={() => setSelected(null)}
                                    />
                                )}
                            </View>
                        );
                    }
                    else {
                        <Text style={styles.text}> {piece.text}</Text>

                    }
                })}

            </View>
            <View style={styles.optionsContainer}>

                <WordOption text={option} isSelected={selected === option}
                    onPress={() => setSelected(option)}
                />

            </View>

            <Button text="Check" onPress={onButtonPress} disabled={!input} />

        </>

    )
};
