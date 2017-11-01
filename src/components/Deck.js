import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Styles = StyleSheet.create({
  touchable: {
    backgroundColor: "white",
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  cardLength: {
    fontSize: 14,
    textAlign: "center"
  }
});

const underlayColor = "#E1F5FE";

const Deck = ({ name, cards, onPress }) => (
  <TouchableHighlight
    style={Styles.touchable}
    onPress={onPress}
    underlayColor={underlayColor}
  >
    <View>
      <Text style={Styles.title}>{name}</Text>
      <Text style={Styles.cardLength}>
        {cards.length} {cards.length === 1 ? "card" : "cards"}
      </Text>
    </View>
  </TouchableHighlight>
);

export default Deck;

// @TODO - add flow types for name, cards
