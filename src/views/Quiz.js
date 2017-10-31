import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import Button from "../components/Button";

const Quiz = ({ name, question, answer }) => (
  <View>
    <Text>Quiz for: {name}</Text>
    <Text>1/1</Text>
    <Text>{question}</Text>
    <Button text="Show Answer" onPress={() => {}} />
    <Button text="Correct" onPress={() => {}} />
    <Button text="Incorrect" onPress={() => {}} />
  </View>
);

const mapStateToProps = (state, { navigation }) => {
  const deckId = navigation.state.params.id;
  const deck = state.decks.find(deck => deck.id === deckId);
  const { question, answer } = deck.cards[0];

  return {
    ...deck,
    question,
    answer
  };
};

export default connect(mapStateToProps)(Quiz);
