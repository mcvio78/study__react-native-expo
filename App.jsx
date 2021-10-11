import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import { AuthNavigator } from './app/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';
import { OfflineNotice } from './app/components/OfflineNotice';
import { AuthContext } from './app/auth/context';
import { authStorage } from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  // Reactotron
  if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  }

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return;
    setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => {
          console.log('Error occurred: ', error);
        }}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={customTheme}>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}
