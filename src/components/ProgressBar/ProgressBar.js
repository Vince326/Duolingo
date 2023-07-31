import React from "react";
import { View, Text } from 'react-native';
import styles from "../ProgressBar/styles";


const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.background} >
            <View style={[styles.foreground, { width: `${progress * 100}%` }]} >
                <View style={styles.highlight}>

                </View>
            </View>

        </View>
    )
};


export default ProgressBar;