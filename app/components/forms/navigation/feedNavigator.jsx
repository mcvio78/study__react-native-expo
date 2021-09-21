import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingDetailsScreen } from '../../../screens/ListingDetailsScreen';
import { ListingScreen } from '../../../screens/ListingScreen';

const Stack = createStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="listing" component={ListingScreen} />
    <Stack.Screen
      options={{
        presentation: 'modal',
        gestureEnabled: true,
        gestureResponseDistance: 500,
      }}
      name="listingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
