import { handleActions } from "redux-actions";

import { CREATE_DECK } from "../actions/actionNames";

const defaultState = {
  decks: []
};

const handlers = {
  [CREATE_DECK]: (state, action) => ({
    ...state,
    decks: [
      {
        name: action.payload.name,
        cards: []
      }
    ].concat(state.decks)
  })
};

const reducer = handleActions(handlers, defaultState);

export default reducer;
