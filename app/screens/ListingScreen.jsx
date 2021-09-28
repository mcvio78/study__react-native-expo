import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { colors } from '../config/colors';
import { routes } from '../navigation/routes/routes';
import { listingsAPI } from '../api/listings';
import { AppText } from '../components/AppText';
import { AppButton } from '../components/AppButton';
import { ActivityIndicator } from '../components/ActivityIndicator';
import { useAPI } from '../hooks/useAPI';

export const ListingScreen = ({ navigation }) => {
  const { request: loadListing, data: listings, error, loading } = useAPI(listingsAPI.getListings);

  useEffect(() => {
    loadListing(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={() => loadListing()} />
        </>
      )}
      {listings.length > 0 && (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => {
            // console.log('item: ', item);
            return (
              <Card
                title={item.title}
                subTitle={`$${item.price}`}
                imageURL={item.images[0].url}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              />
            );
          }}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
});
