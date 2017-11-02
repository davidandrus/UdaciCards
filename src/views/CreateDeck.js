import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createDeck } from "../actions";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ViewWrapper from "../components/ViewWrapper";
import Label from "../components/Label";

import { setLocalNotification } from "../helpers";

class Create extends Component {
  constructor(...args) {
    super(...args);
    this.state = { text: "" };
  }

  _handleTextChange = text => {
    this.setState({ text });
  };

  _createDeck = () => {
    this.props.createDeck(this.state.text);
    this.props.navigateToDecks();
  };

  render() {
    const { text } = this.state;
    const showButton = !!text.trim();

    return (
      <ViewWrapper>
        <Label>Name</Label>
        <TextInput
          onChangeText={this._handleTextChange}
          placeholder="Name of new Deck"
        />
        {showButton && <Button onPress={this._createDeck} text="Create Deck" />}
      </ViewWrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createDeck }, dispatch);

const mapStateToProps = (state, { navigation }) => ({
  navigateToDecks: navigation.goBack
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
