import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createCard } from "../actions";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ViewWrapper from "../components/ViewWrapper";
import Label from "../components/Label";

class Create extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      question: "",
      answer: ""
    };
  }

  _handleQuestionChange = question => {
    this.setState({ question });
  };

  _handleAnswerChange = answer => {
    this.setState({ answer });
  };

  _createCard = () => {
    const { question, answer } = this.state;
    const { id } = this.props;
    this.props.createCard({ id, question, answer });
    this.props.navigateToDeck();
  };

  render() {
    const { question, answer } = this.state;
    const showButton = !!(question.trim() && answer.trim());

    return (
      <ViewWrapper>
        <Label>Question</Label>
        <TextInput
          onChangeText={this._handleQuestionChange}
          placeholder="Enter a question"
        />
        <Label>Answer</Label>
        <TextInput
          onChangeText={this._handleAnswerChange}
          placeholder="Enter an Answer"
        />
        {showButton && <Button onPress={this._createCard} text="Create Card" />}
      </ViewWrapper>
    );
  }
}

const mapStateToProps = (state, { navigation }) => ({
  id: navigation.state.params.id,
  navigateToDeck: navigation.goBack
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createCard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);
