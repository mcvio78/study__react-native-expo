import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import { AppButton } from '../components/AppButton';
import { routes } from '../components/forms/navigation/routes/routes';

export const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don&apos;t Need</Text>
      </View>
      <View style={styles.ButtonsContainer}>
        <AppButton title="login" onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  ButtonsContainer: {
    width: '100%',
    padding: 20,
  },
});
