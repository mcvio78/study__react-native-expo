import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import { AppText } from './AppText';
import { colors } from '../config/colors';

export const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (
    (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) ||
    netInfo.type === 'unknown'
  ) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    position: 'absolute',
    top: Constants.statusBarHeight,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
