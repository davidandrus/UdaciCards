import { createStore } from "redux";

function reducer(state = { cards: [] }, action) {
  console.log("reducing", action);

  switch (action.type) {
    case "createDeck":
      return {
        ...state,
        cards: state.cards.concat({
          name: action.payload.name,
          questions: []
        })
      };
    default:
      return state;
  }
}

export default createStore(reducer);
