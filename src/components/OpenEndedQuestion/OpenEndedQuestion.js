import react from "react";
import { View, Text, TextInput } from 'react-native';
import styles from "./styles";
import mascot from './assets/images/mascot.png';

const OpenEndedQuestion = () => {
    return (
        <>
            <Text style={styles.title}>Translate this sentence</Text>
            <View style={styles.row}>
                <Image
                    source={mascot}
                    style={styles.mascot}
                    resizeMode="contain" />

                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>Sentence</Text>
                </View>

            </View>

            {/* Sentence Container*/}
            <TextInput placeholder="Type in English" style={styles.TextInput} />
        </>

    );
}

export default OpenEndedQuestion;