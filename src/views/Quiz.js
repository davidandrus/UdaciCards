import React from "react";
import { bindActionCreators } from "redux";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { nextSlide, showAnswer, endQuiz, startQuiz } from "../actions";
import store from "../store";

import Button from "../components/Button";

const Quiz = ({
  noRender,
  name,
  question,
  answer,
  questionCount,
  slide,
  answerVisible,
  correctCount,
  finishQuiz,
  percentageCorrect,
  restartQuiz,
  setCorrect,
  setIncorrect,
  showAnswer,
  showResults
}) => {
  const showAnswerButton = !showResults && !answerVisible;
  const showQuestion = !showResults;
  if (noRender) {
    return null;
  }
  return (
    <View>
      <Text>Quiz for: {name}</Text>
      {showResults && (
        <View>
          <Text>{percentageCorrect}%</Text>
          <Button onPress={restartQuiz} text="Restart Quiz" />
          <Button onPress={finishQuiz} text="Go back to deck" />
        </View>
      )}
      {showQuestion && <Text>{question}</Text>}
      {showAnswerButton && <Button text="Show Answer" onPress={showAnswer} />}
      {answerVisible && (
        <View>
          <Text>{answer}</Text>
          <Button text="Correct" onPress={setCorrect} />
          <Button text="Incorrect" onPress={setIncorrect} />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state, { navigation }) => {
  const { id: deckId, slide, correctCount, answerVisible } = state.quiz;

  // @TODO - this is gross refactor at some point
  // prevents rendering of component when quiz is being ended
  if (!deckId) {
    return { noRender: true };
  }

  const deck = state.decks.find(deck => deck.id === deckId);
  const card = deck.cards[slide];
  const questionCount = deck.cards.length;
  console.log({ navigation });

  if (!card) {
    return {
      finishQuiz: () => {
        // @TODO - this is another case of grossness that should be fixed by implementing react-navigation in redux.
        navigation.goBack();
        store.dispatch(endQuiz());
      },
      restartQuiz: () => {
        store.dispatch(startQuiz(deckId));
      },
      name: deck.name,
      showResults: true,
      percentageCorrect: Math.round(correctCount / questionCount * 100)
    };
  }

  const { question, answer } = card;
  return {
    name: deck.name,
    question,
    answer,
    questionCount,
    slide: slide + 1,
    answerVisible
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      showAnswer,
      setCorrect: () => nextSlide(true),
      setIncorrect: () => nextSlide(false)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
