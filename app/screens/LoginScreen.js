import React from "react";
import { StyleSheet, View } from "react-native";

import { AppButton } from "../components/AppButton";
import { colors } from "../config/colors";

export const LoginScreen = () => {
  return (
    <View style={styles.loginBackground}>
      <AppButton title="login" onPress={() => console.log("tapped")} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
