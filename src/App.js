import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import Decks from "./views/Decks";
import Deck from "./views/Deck";
import CreateDeck from "./views/CreateDeck";
import CreateCard from "./views/CreateCard";
import Quiz from "./views/Quiz";

const getDeckById = id => store.getState().decks.find(deck => deck.id === id);

const Navigator = StackNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      headerTitle: "Decks"
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => {
      const deck = getDeckById(navigation.state.params.id);
      return { title: `${deck.name}` };
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      headerTitle: "Create Deck"
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: ({ navigation }) => {
      const deck = getDeckById(navigation.state.params.id);
      return { title: `Add card to ${deck.name}` };
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => {
      const deck = getDeckById(navigation.state.params.id);
      return { title: `${deck.name} Quiz` };
    }
  }
});

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
