import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from './app/components/forms/navigation/authNavigator';
import { customTheme } from './app/components/forms/navigation/navigarionTheme';

export default function App() {
  return (
    <NavigationContainer theme={customTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
