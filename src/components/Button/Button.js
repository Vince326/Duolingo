import propTypes from "prop-types";
import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress }) => {
    return (

        <Pressable onPress={onPress}
            style={[styles.container, disabled ? styles.disabledContainer : {}]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

Button.propTypes = {
    text: propTypes.string.isRequired,
    onPress: propTypes.func

};

Button.defaultProps = {
    onPress: () => { },
    disabled: false,

};

export default Button;