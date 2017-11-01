import React from "react";
import { bindActionCreators } from "redux";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { nextSlide, showAnswer, endQuiz, startQuiz } from "../actions";
import store from "../store";

import Button from "../components/Button";
import ViewWrapper from "../components/ViewWrapper";

const styles = StyleSheet.create({
  questionOf: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center"
  },
  question: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  answerWrapper: {
    backgroundColor: "#EEEEEE",
    marginBottom: 20,
    padding: 10
  },
  answer: {
    textAlign: "center",
    fontSize: 24
  },
  results: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 50,
    marginTop: 20
  }
});

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
    <ViewWrapper>
      {showResults && (
        <View>
          <Text style={styles.results}>
            You answered {percentageCorrect}% correctly{" "}
          </Text>
          <Button onPress={restartQuiz} text="Restart Quiz" />
          <Button onPress={finishQuiz} text="Go back to deck" />
        </View>
      )}
      {showQuestion && (
        <View>
          <Text style={styles.questionOf}>
            Question {slide} of {questionCount}
          </Text>
          <Text style={styles.question}>{question}</Text>
        </View>
      )}
      {showAnswerButton && <Button text="Show Answer" onPress={showAnswer} />}
      {answerVisible && (
        <View>
          <View style={styles.answerWrapper}>
            <Text style={styles.answer}>{answer}</Text>
          </View>
          <Button text="Correct" onPress={setCorrect} />
          <Button text="Incorrect" onPress={setIncorrect} />
        </View>
      )}
    </ViewWrapper>
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
