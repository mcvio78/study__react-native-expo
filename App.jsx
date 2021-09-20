import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './app/components/forms/navigation/authNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
