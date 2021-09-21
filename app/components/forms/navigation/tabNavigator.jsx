import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FeedNavigator } from './feedNavigator';
import { ListingEditScreen } from '../../../screens/ListingEditScreen';
import { AccountNavigator } from './accountNavigator';
import { NewListingButton } from './NewListingButton';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name="list"
      component={FeedNavigator}
      options={{
        title: 'Feed',
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="listEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        title: 'Feed',
        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate('listEdit')} />,
        // tabBarIcon: ({ size, color }) => (
        //   <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
        // ),
      })}
    />
    <Tab.Screen
      name="account"
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
