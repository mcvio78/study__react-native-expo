import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { colors } from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

export const ListingScreen = ({ navigation }) => (
  <Screen style={styles.screen}>
    <View style={styles.content}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
            onPress={() => navigation.navigate('listingDetails', item)}
          />
        )}
      />
    </View>
  </Screen>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  content: {
    padding: 20,
  },
});
