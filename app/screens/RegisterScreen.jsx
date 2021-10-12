import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { Screen } from '../components/Screen';
import { AppErrorMessage, AppForm, AppFormField, AppFormSubmitButton } from '../components/forms';
import { usersAPI } from '../api/users';
import { useAPI } from '../hooks/useAPI';
import { authAPI } from '../api/auth';
import { useAuth } from '../hooks/useAuth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label('name'),
  email: Yup.string().required().email().label('email'),
  password: Yup.string().required().min(4).label('password'),
});

export const RegisterScreen = () => {
  const [error, setError] = useState('');
  const { request } = useAPI(authAPI.login);
  const { logIn } = useAuth();

  const handleRegister = async (userInfo) => {
    try {
      const response = await usersAPI.signUp(userInfo);
      if (response.status >= 200 < 300) {
        const { data: token } = await request(userInfo.email, userInfo.password);
        logIn(token);
        setError('');
      }
    } catch (error) {
      console.log('error: ', error);
      if (error.data.error) {
        setError(error.data.error);
      } else {
        setError('An unexpected error occurred.');
        console.log(error);
      }
    }
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}>
        <AppErrorMessage error={error} touched />
        <AppFormField
          name="name"
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
