import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from './AppText';

export const PickerItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <AppText style={styles.text}>{item.label}</AppText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});