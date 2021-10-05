import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { AuthNavigator } from './app/components/forms/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';
import { OfflineNotice } from './app/components/OfflineNotice';

export default function App() {
  // Reactotron
  if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  }

  return (
    <>
      <NavigationContainer theme={customTheme}>
        <TabNavigator />
      </NavigationContainer>
      <OfflineNotice />
    </>
  );
}
