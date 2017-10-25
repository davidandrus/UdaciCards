import React from "react";
import { StackNavigator } from "react-navigation";

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

export default Navigator;
