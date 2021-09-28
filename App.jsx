import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { AuthNavigator } from './app/components/forms/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';

export default function App() {
  // Reactotron
  /* eslint-disable-next-line */
  if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  }

  return (
    <NavigationContainer theme={customTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
