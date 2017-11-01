import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import Decks from "./views/Decks";
import Deck from "./views/Deck";
import CreateDeck from "./views/CreateDeck";
import CreateCard from "./views/CreateCard";
import Quiz from "./views/Quiz";

const Navigator = StackNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      headerTitle: "Decks"
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck"
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
    navigationOptions: {
      headerTitle: "Create Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTitle: "Quiz"
    }
  }
});

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
