import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../../../screens/AccountScreen';
import { MessagesScreen } from '../../../screens/MessagesScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="accountList" component={AccountScreen} />
    <Stack.Screen name="messages" component={MessagesScreen} />
  </Stack.Navigator>
);
