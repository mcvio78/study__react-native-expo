import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import { FeedNavigator } from './feedNavigator';
import { ListingEditScreen } from '../screens/ListingEditScreen';
import { AccountNavigator } from './accountNavigator';
import { NewListingButton } from './NewListingButton';
import { routes } from './routes/routes';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  useEffect(() => {
    (async () => {
      try {
        const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permissions.granted) return;
        const token = await Notifications.getExpoPushTokenAsync();

        console.log('token: ', token);
      } catch (error) {
        console.log('Error getting a push token: ', error);
      }
    })();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          title: 'Feed',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LIST_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          title: 'List edit',
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate(routes.LIST_EDIT)} />
          ),
          // tabBarIcon: ({ size, color }) => (
          //   <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
          // ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          title: 'Account',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
