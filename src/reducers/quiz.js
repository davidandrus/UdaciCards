import { handleActions } from "redux-actions";

import {
  START_QUIZ,
  NEXT_SLIDE,
  SHOW_ANSWER,
  END_QUIZ
} from "../actions/actionNames";

const DEFAULT_STATE = {
  id: null,
  slide: 0,
  answerVisible: false,
  correctCount: 0
};

const handlers = {
  [START_QUIZ]: (state, action) => ({
    ...DEFAULT_STATE,
    id: action.payload.id
  }),

  [NEXT_SLIDE]: (state, action) => ({
    ...state,
    answerVisible: false,
    slide: state.slide + 1,
    correctCount: action.payload.correct
      ? state.correctCount + 1
      : state.correctCount
  }),

  [SHOW_ANSWER]: (state, action) => ({
    ...state,
    answerVisible: true
  }),

  [END_QUIZ]: () => DEFAULT_STATE
};

export default handleActions(handlers, DEFAULT_STATE);
