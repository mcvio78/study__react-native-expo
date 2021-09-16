import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { ImageInput } from './ImageInput';

export const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={(imageUri) => onAddImage(imageUri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  image: {
    marginRight: 10,
  },
});
