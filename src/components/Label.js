import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5
  }
});

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;

export default Label;
