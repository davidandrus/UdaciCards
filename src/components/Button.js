import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#039BE5",
    height: 40,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 150
  },
  buttonText: {
    color: "white",
    lineHeight: 40,
    textAlign: "center"
  }
});

const underlayColor = "#0277BD";

const Button = ({ text, onPress }) => (
  <View style={styles.button}>
    <TouchableHighlight
      style={styles.button}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  </View>
);

export default Button;

//@TOOD - add propTypes
