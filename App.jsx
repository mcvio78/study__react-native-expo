import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';

// import { AuthNavigator } from './app/components/forms/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';

export default function App() {
  // Reactotron
  if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  }

  const netInfo = useNetInfo();

  return (
    netInfo && (
      <NavigationContainer theme={customTheme}>
        <TabNavigator />
      </NavigationContainer>
    )
  );
}
