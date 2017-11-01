import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  cardLength: {
    fontSize: 14,
    textAlign: "center"
  }
});

const Deck = ({ name, cards, onPress }) => (
  <View style={Styles.view}>
    <TouchableHighlight onPress={onPress}>
      <View>
        <Text style={Styles.title}>{name}</Text>
        <Text style={Styles.cardLength}>
          {cards.length} {cards.length === 1 ? "card" : "cards"}
        </Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default Deck;

// @TODO - add flow types for name, cards
