import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../../../screens/AccountScreen';
import { MessagesScreen } from '../../../screens/MessagesScreen';
import { routes } from './routes/routes';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT_LIST} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);
