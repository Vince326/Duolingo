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
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from '../Duolingo/src/components/OpenEndedQuestion'

import questions from './assets/assets/data/openEndedQuestions';


const App = () => {
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

  const onCorrect = () => {
    setCurrentQuestion(currentQuestionIndex + 1)
  }

  const onWrong = () => {
    Alert.alert("Wrrrong");
  }



  return (
    <View style={styles.root}>

      {/*<ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
  /> */}
      <OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View >
  );


};






export default App;