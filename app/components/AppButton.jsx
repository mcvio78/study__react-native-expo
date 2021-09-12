import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../config/colors';

export const AppButton = ({ title, onPress, color = 'primary' }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.white,
  },
});
