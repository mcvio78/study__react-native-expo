import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button } from 'react-native';
import { Screen } from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="See tweets" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />
  );
};

const ChildComponent = () => {
  const route = useRoute();
  return <Text>This is the route params inside child: {route.params.id}</Text>;
};

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweets details {route.params.id}</Text>
      <ChildComponent />
    </Screen>
  );
};

const AccountNavigator = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="tweets" component={Tweets} options={{ title: 'Tweeds' }} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{ title: 'Tweet details' }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontWeight: '700',
        fontSize: 15,
      },
      tabBarIconStyle: { display: 'none' },
      headerShown: false,
    }}>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
