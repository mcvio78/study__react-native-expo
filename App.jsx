import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { AuthNavigator } from './app/components/forms/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';

export default function App() {
  return (
    <NavigationContainer theme={customTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
