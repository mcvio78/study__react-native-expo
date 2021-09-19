import React from 'react';
import { Text } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  // useRoute
} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button } from 'react-native';
import { Screen } from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  return <Button title="Click" onPress={() => navigation.navigate('TweetDetails', { id: 1 })} />;
};

// const ChildComponent = () => {
//   const route = useRoute();
//   return <Text>This is the route params inside child: {route.params.id}</Text>;
// };

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets main page</Text>
      <Link />
    </Screen>
  );
};

// const TweetDetails = ({ route }) => {
//   return (
//     <Screen>
//       <Text>Tweets details {route.params.id}</Text>
//       <ChildComponent />
//     </Screen>
//   );
// };

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'tomato' } }}>
//     <Stack.Screen name="tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({
//         title: `Page id ${route.params.id}`,
//         headerTintColor: 'white',
//       })}
//     />
//   </Stack.Navigator>
// );

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
      tabBarInactiveTintColor: 'black',
      tabBarActiveTintColor: 'white',
    }}>
    <Tab.Screen
      name="Tweets"
      component={Tweets}
      options={{
        tabBarActiveBackgroundColor: 'red',
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarActiveBackgroundColor: 'green',
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
