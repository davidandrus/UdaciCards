import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { store } from "../store";
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
    store.dispatch(createDeck(this.state.text));
    const [deck] = store.getState().decks;
    this.props.navigation.navigate("Deck", { id: deck.id });
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

export default connect()(Create);
