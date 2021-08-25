import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

export const ListItemDeleteAction = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});
