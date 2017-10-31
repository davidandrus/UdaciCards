import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import Decks from "./views/Decks";
import Deck from "./views/Deck";
import CreateDeck from "./views/CreateDeck";
import CreateCard from "./views/CreateCard";

const Navigator = StackNavigator({
  Home: {
    screen: Decks
  },
  Deck: {
    screen: Deck
  },
  CreateDeck: {
    screen: CreateDeck
  },
  CreateCard: {
    screen: CreateCard
  }
});

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
