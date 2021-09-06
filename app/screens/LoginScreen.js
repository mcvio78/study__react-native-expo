import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { AppButton } from "../components/AppButton";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChange={(text) => setEmail(text)}
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry
        onChange={(text) => setPassword(text)}
      />
      <AppButton
        title="Login"
        onPress={() => {
          console.log("email and password: ", email, password);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
