import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";

export const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
