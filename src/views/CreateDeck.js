import React, { Component } from "react";
import { Text, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createDeck } from "../actions";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

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
          placeholder="Name of new Deck"
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
