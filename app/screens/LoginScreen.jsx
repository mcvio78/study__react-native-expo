import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import { Screen } from '../components/Screen';
import { AppForm, AppFormField, AppFormSubmitButton, AppErrorMessage } from '../components/forms';
import { authAPI } from '../api/auth';
import { useAPI } from '../hooks/useAPI';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const LoginScreen = () => {
  const { request, data, error } = useAPI(authAPI.login);

  const handleSubmit = ({ email, password }) => {
    request(email, password);
    const user = jwtDecode(data);
    console.log('user: ', user);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}>
        <AppErrorMessage error={error.errorMessage} touched />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <AppFormSubmitButton title="Login" />
      </AppForm>
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
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
