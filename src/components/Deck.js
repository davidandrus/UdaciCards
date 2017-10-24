import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  view: {
    borderBottomWidth: 2,
    borderColor: "blue",
    paddingBottom: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  cardLength: {
    fontSize: 14,
    textAlign: "center"
  }
});

const Deck = ({ name, cards }) => (
  <View style={Styles.view}>
    <Text style={Styles.title}>{name}</Text>
    <Text style={Styles.cardLength}>
      {cards.length} {cards.length === 1 ? "card" : "cards"}
    </Text>
  </View>
);

export default Deck;

// @TODO - add flow types for name, cards
