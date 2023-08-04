import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import icon from './assets/icon.png'
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import question from './assets/assets/data/oneQuestionWithOption';
import propTypes from 'prop-types';
import Button from './src/components/Button';
//import questions from './assets/assets/data/imageMultipleChoiceQuestions';
import { Alert } from 'react-native/types';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import Header from './src/components/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';
import OpenEndedQuestion from '../Duolingo/src/components/OpenEndedQuestion';

import questions from './assets/assets/data/allQuestions';
import SentenceCompletion from './src/components/SentenceCompletion';


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]
  );

  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (currentQuestionIndex > questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex])

    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveInfo();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestion(currentQuestionIndex + 1)
  }

  const restartGame = () => {
    setLives(5);
    setCurrentQuestionIndex(0);

  }

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("You ran out of lives, game over!!", "Try again, you can do it!", [
        {
          text: 'Want to Play Again',
          onPress: restartGame
        }
      ]);
    } else {
      Alert.alert("Incorrect Answer");
      setLives(lives - 1);


    }
  };
  try {
    const saveInfo = async () => {
      await AsyncStorage.setItem('lives', lives.toString());
      await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    }
  }
  catch (e) {
    console.error(e)
  }

  try {
    const loadInfo = async () => {
      const loadedLives = await AsyncStorage.getItem('lives')
      if (loadedLives) {
        setLives(parseInt(loadedLives))
      }
      const currentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');

      if (currentQuestionIndex) {
        setLives(parseInt(currentQuestionIndex))
      }
    }

    setHasLoaded(true);
  }

  catch (e) {
    console.error("Something wrong has happened", e);
  }

  if (!hasLoaded) {
    return (<ActivityIndicator />);

  }


  return (
    <View style={styles.root}>

      <Header progress={currentQuestionIndex / questions.length} lives={lives} />

      <SentenceCompletion

        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />

      {/* {currentQuestion.type === 'IMAGEM_ULTIPLE_CHOICE' ? (<ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />) : null}

      {currentQuestion.type === 'OPEN_ENDED' ? <OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> : null} */}
    </View >
  );
};






export default App;