import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { AppText } from '../components/AppText';

export const UploadScreen = ({ visible = false, progress = 0 }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
