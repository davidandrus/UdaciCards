import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import Deck from "../components/Deck";
import Button from "../components/Button";

const styles = StyleSheet.create({
  view: {
    paddingTop: 20
  },
  decks: {
    marginBottom: 20
  }
});

const Decks = ({ navigation, decks }) => (
  <View style={styles.view}>
    <View style={styles.decks}>
      {decks.map((deck, index) => (
        <Deck
          key={deck.name}
          //@TODO should propbably update to use an ID instead
          onPress={() => navigation.navigate("Deck", { deck })}
          {...deck}
        />
      ))}
    </View>
    <Button
      onPress={() => navigation.navigate("Create")}
      text="Create New Deck"
    />
  </View>
);

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Decks);

// @TODO - add flow types for decks
