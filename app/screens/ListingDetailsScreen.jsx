import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { AppText } from '../components/AppText';
import { colors } from '../config/colors';
import { ListItem } from '../components/lists/ListItem';

export const ListingDetailsScreen = () => (
  <View>
    <Image style={styles.image} source={require('../assets/jacket.jpg')} />
    <View style={styles.detailsContainer}>
      <AppText style={styles.cardTitle}>Red jacket for sale!</AppText>
      <AppText style={styles.cardSubtitle}>$100</AppText>
      <View style={styles.userContainer}>
        <ListItem title="Mauro Vio" subTitle="5 Listing" image={require('../assets/mauro.jpg')} />
      </View>
    </View>
  </View>
);

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
