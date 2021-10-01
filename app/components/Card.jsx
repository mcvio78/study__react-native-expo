import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { colors } from '../config/colors';
import { AppText } from './AppText';

export const Card = ({ title, subTitle, imageURL, thumbnailURL, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.cardContainer}>
      <Image style={styles.image} preview={{ uri: thumbnailURL }} uri={imageURL} tint="light" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.cardTitle} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.cardSubtitle}>{subTitle}</AppText>
      </View>
    </View>
  </TouchableWithoutFeedback>
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
