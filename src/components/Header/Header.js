import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Header/styles';
import ProgressBar from '../ProgressBar';
import heart from '../../../assets/assets/images/heart.png';


const Header = ({ progress, lives }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />

            <Image source={heart} style={styles.heartIcon} />
            <Text style={styles.lives}>{lives}</Text>
        </View>



    )
}

export default Header;