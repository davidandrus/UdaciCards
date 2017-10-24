import React from "react";

import Decks from "./views/Decks";

const decks = [
  {
    name: "Deck 1",
    cards: [
      {
        question: "Question One",
        answer: "Answer One"
      },
      {
        question: "Question Two",
        answer: "Answer Two"
      }
    ]
  },
  {
    name: "Deck 2",
    cards: [
      {
        question: "Question One",
        answer: "Answer One"
      },
      {
        question: "Question Two",
        answer: "Answer Two"
      }
    ]
  }
];

const App = () => <Decks decks={decks} />;

export default App;
