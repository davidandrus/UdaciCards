import React from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";

import Button from "../components/Button";

const Deck = ({ name, cards, onAddClick }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>
        {/* @TODO this is redundant, should move into shared helper or something */}
        {cards.length} {cards.length === 1 ? "card" : "cards"}
      </Text>
      <Button text="Add Card" onPress={onAddClick} />
      <Button text="Start Quiz" onPress={() => {}} />
    </View>
  );
};

const mapStateToProps = (state, { navigation }) => {
  return {
    ...navigation.state.params.deck,
    onAddClick: () => navigation.navigate("CreateCard")
  };
};

export default connect(mapStateToProps)(Deck);
