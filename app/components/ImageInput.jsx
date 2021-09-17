import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, Image, Alert, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../config/colors';
import * as ImagePicker from 'expo-image-picker';

export const ImageInput = ({
  size = 80,
  backgroundColor = colors.light,
  iconColor = colors.medium,
  onChangeImage,
  imageUri,
}) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log('Reading an image', error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[styles.container, { width: size, height: size, backgroundColor: backgroundColor }]}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={size / 2} color={iconColor} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
