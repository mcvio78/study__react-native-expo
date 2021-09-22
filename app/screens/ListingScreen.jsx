import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { colors } from '../config/colors';
import { routes } from '../navigation/routes/routes';
import { listingsAPI } from '../api/listings';

// const listings = [
//   {
//     id: 1,
//     title: 'Red jacket for sale',
//     price: 100,
//     image: require('../assets/jacket.jpg'),
//   },
//   {
//     id: 2,
//     title: 'Couch in great condition',
//     price: 1000,
//     image: require('../assets/couch.jpg'),
//   },
// ];

export const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await listingsAPI.getListings;
        setListings(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    })();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.content}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              imageURL={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  content: {
    padding: 20,
  },
});
