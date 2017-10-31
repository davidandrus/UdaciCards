import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
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
