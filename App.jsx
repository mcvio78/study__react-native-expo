import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';

import { AuthNavigator } from './app/navigation/authNavigator';
import { TabNavigator } from './app/navigation/tabNavigator';
import { customTheme } from './app/navigation/theme/navigarionTheme';
import { OfflineNotice } from './app/components/OfflineNotice';
import { AuthContext } from './app/auth/context';
import { authStorage } from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const token = await authStorage.getToken();
      if (!token) return;
      setUser(jwtDecode(token));
    })();
  }, []);

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
