import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createCard } from "../actions";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

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
    this.props.createCard({ question, answer });
    this.props.navigateToDeck();
  };

  render() {
    return (
      <View>
        <Text>Create new card</Text>
        <TextInput
          onChangeText={this._handleQuestionChange}
          placeholder="Question"
        />
        <TextInput
          onChangeText={this._handleAnswerChange}
          placeholder="Answer"
        />
        <Button onPress={this._createCard} text="Create Card" />
      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => ({
  navigateToDeck: navigation.goBack
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createCard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);