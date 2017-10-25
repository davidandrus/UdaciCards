import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import Decks from "./views/Decks";
import Deck from "./views/Deck";
import Create from "./views/Create";

const Navigator = StackNavigator({
  Home: {
    screen: Decks
  },
  Deck: {
    screen: Deck
  },
  Create: {
    screen: Create
  }
});

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
