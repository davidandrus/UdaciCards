import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import Deck from "../components/Deck";
import Button from "../components/Button";
import ViewWrapper from "../components/ViewWrapper";

const Decks = ({ navigation, decks }) => (
  <ViewWrapper>
    <ScrollView>
      <View>
        {decks.map(deck => (
          <Deck
            key={deck.id}
            //@TODO should propbably update to use an ID instead
            onPress={() => navigation.navigate("Deck", { id: deck.id })}
            {...deck}
          />
        ))}
      </View>
      <Button
        onPress={() => navigation.navigate("CreateDeck")}
        text="Create New Deck"
      />
    </ScrollView>
  </ViewWrapper>
);

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Decks);
