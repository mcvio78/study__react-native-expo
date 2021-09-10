import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Icon } from "./Icon";
import { AppText } from "./AppText";

export const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={item.iconName}
        backgroundColor={item.iconBackgroundColor}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "33.3%",
    alignItems: "center",
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
