import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import Deck from "../components/Deck";
import Button from "../components/Button";

const styles = StyleSheet.create({
  view: {
    paddingTop: 10
  }
});

const Decks = ({ navigation, decks }) => (
  <ScrollView>
    <View style={styles.view}>
      <View>
        {decks.map(deck => (
          <Deck
            key={deck.name}
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
    </View>
  </ScrollView>
);

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Decks);
