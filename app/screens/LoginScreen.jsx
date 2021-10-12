import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import * as Yup from 'yup';

import { Screen } from '../components/Screen';
import { AppForm, AppFormField, AppFormSubmitButton, AppErrorMessage } from '../components/forms';
import { authAPI } from '../api/auth';
import { useAuth } from '../hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const LoginScreen = () => {
  const [error, setError] = useState('');
  const { logIn } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    try {
      const result = await authAPI.login(email, password);
      setError('');
      logIn(result.data);
    } catch (error) {
      setError(error.data.error);
    }
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}>
          <AppErrorMessage error={error} touched />
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
      </ScrollView>
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
