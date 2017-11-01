import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

const ViewWrapper = ({ children }) => (
  <View style={styles.view}>{children}</View>
);

export default ViewWrapper;
