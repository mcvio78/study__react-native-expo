import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { colors } from "../config/colors";

export const LoginScreen = () => {
  return (
    <View style={styles.loginBackground}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
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
  loginButton: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary
  },
  loginButtonText:{
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white
  }
});
