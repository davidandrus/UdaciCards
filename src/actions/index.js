import { CREATE_DECK, CREATE_CARD } from "./actionNames";

const createDeck = name => ({
  type: CREATE_DECK,
  payload: { name }
});

const createCard = payload => ({
  type: CREATE_CARD,
  payload
});

export { createDeck, createCard };
