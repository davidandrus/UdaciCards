import uuid from "uuid/v1";
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
        id: uuid(),
        name: action.payload.name,
        cards: []
      }
    ].concat(state.decks)
  })
};

const reducer = handleActions(handlers, defaultState);

export default reducer;
