import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: 150
  },
  touchable: {
    height: 40
  },
  buttonText: {
    lineHeight: 40,
    textAlign: "center"
  }
});

const Button = ({ text, onPress }) => (
  <View style={styles.button}>
    <TouchableHighlight
      style={styles.touchable}
      underlayColor={"blue"}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  </View>
);

export default Button;

//@TOOD - add propTypes
