import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Button from "../components/Button";

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: "black"
  }
});

const Create = () => (
  <View>
    <Text>Create Screen Goes Here</Text>
    <TextInput
      onChangeText={() => {}}
      placeholder="Type your text here"
      style={styles.textInput}
    />
    <Button onPress={() => {}} text="Create Deck" />
  </View>
);

export default Create;

// @TODO - abstract button
