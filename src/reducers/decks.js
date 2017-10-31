import uuid from "uuid/v1";
import { handleActions } from "redux-actions";

import { CREATE_DECK, CREATE_CARD } from "../actions/actionNames";

const handlers = {
  [CREATE_DECK]: (state, action) =>
    [
      {
        id: uuid(),
        name: action.payload.name,
        cards: []
      }
    ].concat(state),

  [CREATE_CARD]: (state, action) => {
    const { id, question, answer } = action.payload;
    return state.map(deck => {
      // if not deck being edited just return current deck
      if (deck.id !== id) {
        return deck;
      }

      return {
        ...deck,
        cards: deck.cards.concat({
          id: uuid(),
          question,
          answer
        })
      };
    });
  }
};

const reducer = handleActions(handlers, []);

export default reducer;
