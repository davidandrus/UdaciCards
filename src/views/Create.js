import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createDeck } from "../actions";
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
    this.state = { text: "" };
  }

  _handleTextChange = text => {
    this.setState({ text });
  };

  _createDeck = () => {
    this.props.actions.createDeck(this.state.text);
    this.props.navigation.goBack();
    // navigate to Decks screen
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
        <Button onPress={this._createDeck} text="Create Deck" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createDeck }, dispatch)
});

export default connect(undefined, mapDispatchToProps)(Create);
// @TODO - abstract button
