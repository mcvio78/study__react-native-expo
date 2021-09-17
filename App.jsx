import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppText } from './app/components/AppText';

const Tweets = () => {
  return <AppText>Tweets main page</AppText>;
};

const TweetsDetails = () => {
  return <AppText>Tweets details</AppText>;
};

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="tweets" component={Tweets} />
    <Stack.Screen name="tweetsDetails" component={TweetsDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
