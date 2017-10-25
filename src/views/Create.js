import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View
} from "react-native";

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: "black"
  },
  button: {
    backgroundColor: "orange",
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: 150
  },
  touchable: {
    height: 40
  },
  buttonText: {
    lineHeight: 40,
    textAlign: "center"
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
    <View style={styles.button}>
      <TouchableHighlight
        style={styles.touchable}
        underlayColor={"blue"}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Create New Deck</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default Create;

// @TODO - abstract button
