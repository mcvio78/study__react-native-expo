import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import { colors } from '../config/colors';

export const UploadScreen = ({ visible = false, progress = 0, onAnimationFinish }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={colors.primary} width={200} />
        ) : (
          <LottieView
            source={require('../assets/animation/33184-succeeded-done-checked-20.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
            style={styles.animation}
          />
        )}
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
  animation: {
    width: 200,
  },
});
