import { CREATE_DECK } from "./actionNames";

const createDeck = name => ({
  type: CREATE_DECK,
  payload: { name }
});

export { createDeck };
