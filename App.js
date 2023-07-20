import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import icon from './assets/icon.png'
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import question from './assets/assets/data/oneQuestionWithOption';
import propTypes from 'prop-types';
import Button from './src/components/Button';

const App = () => {
  const [selectedOption, setSelected] = useState(null);

  const onButtonPress = () => {
    console.warn("Button Pressed");

  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

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

      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </View >
  );


};






export default App;