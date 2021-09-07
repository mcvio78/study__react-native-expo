import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(1).label("username"),
  email: Yup.string().required().email().label("email"),
  password: Yup.string().min(4).label("password"),
});

export const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Register form submitted: ", values)}
      >
        <AppFormField
          name="username"
          icon="account"
          placeholder="Username"
          capitalize="none"
          autoCorrect={false}
          textContentType="username"
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          capitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          capitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <AppFormSubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
