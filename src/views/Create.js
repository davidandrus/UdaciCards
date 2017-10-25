import React, { Component } from "react";
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

class Create extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      text: ""
    };
  }

  _handleTextChange = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View>
        <Text>Create Screen Goes Here</Text>
        <TextInput
          onChangeText={this._handleTextChange}
          placeholder="Type your text here"
          style={styles.textInput}
        />
        <Button onPress={() => {}} text="Create Deck" />
      </View>
    );
  }
}

export default Create;
// @TODO - abstract button
