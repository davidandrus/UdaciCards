import {
  CREATE_DECK,
  CREATE_CARD,
  START_QUIZ,
  SHOW_ANSWER,
  END_QUIZ,
  NEXT_SLIDE
} from "./actionNames";

const createDeck = name => ({
  type: CREATE_DECK,
  payload: { name }
});

const createCard = payload => ({
  type: CREATE_CARD,
  payload
});

const startQuiz = id => ({
  type: START_QUIZ,
  payload: { id }
});

const endQuiz = () => ({
  type: END_QUIZ
});

const nextSlide = correct => ({
  type: NEXT_SLIDE,
  payload: { correct }
});

const showAnswer = () => ({
  type: SHOW_ANSWER
});

export { createDeck, createCard, startQuiz, endQuiz, nextSlide, showAnswer };
