import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen } from '../../../screens/WelcomeScreen';
import { LoginScreen } from '../../../screens/LoginScreen';
import { RegisterScreen } from '../../../screens/RegisterScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen} />
  </Stack.Navigator>
);
