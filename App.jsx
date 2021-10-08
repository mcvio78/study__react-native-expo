import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from './app/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';
import { OfflineNotice } from './app/components/OfflineNotice';
import { AuthContext } from './app/auth/context';

export default function App() {
  const [user, setUser] = useState();

  // Reactotron
  if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
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
