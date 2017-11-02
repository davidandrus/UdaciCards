import React from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

import store from "../store";
import { startQuiz } from "../actions";
import Button from "../components/Button";
import ViewWrapper from "../components/ViewWrapper";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center"
  }
});

const Deck = ({ name, cards, onAddClick, onStartQuiz }) => {
  return (
    <ViewWrapper>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>
        {cards.length} {cards.length === 1 ? "card" : "cards"}
      </Text>
      <Button text="Add Card" onPress={onAddClick} />
      {cards.length > 0 && <Button text="Start Quiz" onPress={onStartQuiz} />}
    </ViewWrapper>
  );
};

const mapStateToProps = (state, { navigation }) => {
  const deckId = navigation.state.params.id;
  return {
    ...state.decks.find(deck => deck.id === deckId),
    onAddClick: () => navigation.navigate("CreateCard", { id: deckId }),
    onStartQuiz: () => {
      store.dispatch(startQuiz(deckId));
      navigation.navigate("Quiz", { id: deckId });
    }
  };
};

export default connect(mapStateToProps)(Deck);
