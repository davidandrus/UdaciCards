import { handleActions } from "redux-actions";

import { CREATE_DECK } from "../actions/actionNames";

const defaultState = {
  cards: []
};

const handlers = {
  [CREATE_DECK]: (state, action) => ({
    ...state,
    cards: [
      {
        name: action.payload.name,
        questions: []
      }
    ].concat(state.cards)
  })
};

const reducer = handleActions(handlers, defaultState);

export default reducer;
