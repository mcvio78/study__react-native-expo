import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { defaultStyles } from "../config/styles";
import { AppText } from "./AppText";

export const AppPicker = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      {icon && (
        <MaterialCommunityIcons
          name="chevron-down"
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  }
});
