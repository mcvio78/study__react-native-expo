import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { AppText } from '../components/AppText';
import { colors } from '../config/colors';
import { ListItem } from '../components/lists/ListItem';

export const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.thumbnailUrl }}
        uri={listing.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.cardTitle}>{listing.title}</AppText>
        <AppText style={styles.cardSubtitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem title="Mauro Vio" subTitle="5 Listing" image={require('../assets/mauro.jpg')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '500',
    paddingBottom: 8,
  },
  cardSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  userContainer: {
    marginVertical: 40,
  },
});
