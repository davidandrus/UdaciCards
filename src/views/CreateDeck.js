import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createDeck } from "../actions";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { commonViewStyles } from "../constants";

const styles = StyleSheet.create({
  view: commonViewStyles,
  label: {
    fontSize: 16,
    marginBottom: 10
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
    this.props.createDeck(this.state.text);
    this.props.navigateToDecks();
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.label}>Create a new Deck</Text>
        <TextInput
          onChangeText={this._handleTextChange}
          placeholder="Name of new Deck"
        />
        <Button onPress={this._createDeck} text="Create Deck" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createDeck }, dispatch);

const mapStateToProps = (state, { navigation }) => ({
  navigateToDecks: navigation.goBack
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
