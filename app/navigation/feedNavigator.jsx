import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingDetailsScreen } from '../screens/ListingDetailsScreen';
import { ListingScreen } from '../screens/ListingScreen';
import { routes } from './routes/routes';

const Stack = createStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTING} component={ListingScreen} />
    <Stack.Screen
      options={{
        presentation: 'modal',
        gestureEnabled: true,
        gestureResponseDistance: 500,
      }}
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
