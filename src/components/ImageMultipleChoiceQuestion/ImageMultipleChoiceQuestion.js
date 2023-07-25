import React from 'react';
import { Text, View, useState } from 'react-native'
import ImageOption from '../ImageOption/ImageOption';
import Button from '../Button';

import propTypes from 'prop-types';


import style from "./styles";

const ImageMulatipleChoiceQuestions = ({ question, onCorrect, onWrong }) => {
    const [selectedOption, setSelected] = useState(null);


    const onButtonPress = () => {
        if (selectedOption.correct) {
            onCorrect();

            setSelectedOption(null);

        } else {
            onWrong();
        }

    }

    return (
        <>
            <Text style={styles.title}>{

                question.question}</Text>

            <View style={styles.optionsContainer}>

                {question.options.map((option) => (
                    <ImageOption key={option.id}
                        image={option.image}
                        text={option.text}
                        isSelected={selectedOption?.id === option.id}
                        onPress={() => setSelected(option)}
                    />
                ))}

            </View>

            <Button text="Check" onPress={onButtonPress} disabled={!selectedOption} />
        </>
    );

};

ImageMultiipleChoiceQuestions.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                text: PropTypes.string,
                image: PropTypes.string,
                correct: PropTypes.bool,
            })
        ).isRequired,
    }).isRequired,

};

export default ImageMulatipleChoiceQuestions;