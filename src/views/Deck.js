import React from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";

import Button from "../components/Button";
import store from "../store";

import { startQuiz } from "../actions";

const Deck = ({ name, cards, onAddClick, onStartQuiz }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>
        {/* @TODO this is redundant, should move into shared helper or something */}
        {cards.length} {cards.length === 1 ? "card" : "cards"}
      </Text>
      <Button text="Add Card" onPress={onAddClick} />
      <Button text="Start Quiz" onPress={onStartQuiz} />
    </View>
  );
};

const mapStateToProps = (state, { navigation }) => {
  const deckId = navigation.state.params.id;
  return {
    ...state.decks.find(deck => deck.id === deckId),
    onAddClick: () => navigation.navigate("CreateCard", { id: deckId }),
    onStartQuiz: () => {
      // @TODO - this is gross, should route everything through redux
      store.dispatch(startQuiz(deckId));
      navigation.navigate("Quiz", { id: deckId });
    }
  };
};

export default connect(mapStateToProps)(Deck);
