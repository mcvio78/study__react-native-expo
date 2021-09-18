import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from 'react-native';
import { Screen } from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  return <Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />;
};

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets main page</Text>
      <Link />
    </Screen>
  );
};

const TweetDetails = () => {
  return (
    <Screen>
      <Text>Tweets details</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
