import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { colors } from '../config/colors';
import { AppText } from './AppText';

export const Card = ({ title, subTitle, image }) => (
  <View style={styles.cardContainer}>
    <Image style={styles.image} source={image} />
    <View style={styles.detailsContainer}>
      <AppText style={styles.cardTitle} numberOfLines={1}>
        {title}
      </AppText>
      <AppText style={styles.cardSubtitle}>{subTitle}</AppText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  cardTitle: {
    paddingBottom: 8,
  },
  cardSubtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
