import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import icon from './assets/icon.png'
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import question from './assets/assets/data/oneQuestionWithOption';
import propTypes from 'prop-types';
import Button from './src/components/Button';
import questions from './assets/assets/data/imageMulatipleChoiceQuestions';
import { Alert } from 'react-native/types';


const App = () => {
  const [selectedOption, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])

  useEffect(() => {
    if (currentQuestionIndex > questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])

    }
  }, [currentQuestionIndex]);

  const onButtonPress = () => {
    if (selectedOption.correct) {
      Alert.alert("Correct");
      // move to the next question
      console.log("current index: ", currentQuestionIndex);

      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      console.log("changed to index ", nextIndex);

      setCurrentQuestion(questions[nextIndex])
    } else {
      Alert.alert("That's the Wrong Answer!!")
    }

  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{

        currentQuestion.question}</Text>

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
    </View >
  );


};






export default App;