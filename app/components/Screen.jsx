import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Constants from 'expo-constants';

export const Screen = ({ children, style }) => (
  <SafeAreaView style={styles.screen}>
    <View style={style}>{children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
