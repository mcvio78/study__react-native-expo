import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { colors } from '../config/colors';
import { routes } from '../navigation/routes/routes';
import { getListings } from '../api/listings';
import { AppText } from '../components/AppText';
import { AppButton } from '../components/AppButton';

export const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const loadListing = async () => {
    try {
      const { data } = await getListings();
      setListings(data);
      setError(false);
    } catch (err) {
      console.log('Error fetching data: ', err.message);
      setError(true);
    }
  };

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.content}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={() => loadListing()} />
          </>
        )}
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
