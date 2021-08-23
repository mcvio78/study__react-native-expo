import React from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../config/colors";

export const ListItemSeparator = () => {
  return <View style={styles.listItemSeparator} />;
};

const styles = StyleSheet.create({
  listItemSeparator: {
    width: "100%",
    height: 2,
    backgroundColor: colors.light,
  },
});
