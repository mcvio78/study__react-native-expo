import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FeedNavigator } from './feedNavigator';
import { ListingEditScreen } from '../screens/ListingEditScreen';
import { AccountNavigator } from './accountNavigator';
import { NewListingButton } from './NewListingButton';
import { routes } from './routes/routes';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
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
