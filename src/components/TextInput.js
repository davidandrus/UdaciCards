import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: "black"
  }
});

const CustomTextInput = ({ onChangeText, placeholder }) => (
  <TextInput
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={styles.textInput}
  />
);

export default CustomTextInput;
