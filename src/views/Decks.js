import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

import Deck from "../components/Deck";

const styles = StyleSheet.create({
  view: {
    paddingTop: 20
  },
  decks: {
    marginBottom: 20
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

const Decks = ({ decks }) => (
  <View style={styles.view}>
    <View style={styles.decks}>
      {decks.map(deck => <Deck key={deck.name} {...deck} />)}
    </View>
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

export default Decks;

// @TODO - add flow types for decks
