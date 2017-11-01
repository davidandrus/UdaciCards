import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    padding: 5,
    marginBottom: 10,
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
