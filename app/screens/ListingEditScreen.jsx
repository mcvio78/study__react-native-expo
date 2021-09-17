import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import { Screen } from '../components/Screen';
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
  AppFormPicker,
  FormImagePicker,
} from '../components/forms';
import { CategoryPickerItem } from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, 'Please select at least one image.'),
  title: Yup.string().required().min(1).label('title'),
  price: Yup.number().required().min(1).max(10000).label('price'),
  category: Yup.object().required().nullable().label('category'),
  description: Yup.string().min(1).label('description'),
});

const categories = [
  {
    label: 'Furniture',
    iconName: 'floor-lamp',
    iconBackgroundColor: '#fc5c65',
    value: 1,
  },
  {
    label: 'Cars',
    iconName: 'car',
    iconBackgroundColor: '#fd9644',
    value: 2,
  },
  {
    label: 'Cameras',
    iconName: 'camera',
    iconBackgroundColor: '#fed330',
    value: 3,
  },
  {
    label: 'Games',
    iconName: 'cards',
    iconBackgroundColor: '#26de81',
    value: 4,
  },
  {
    label: 'Clothing',
    iconName: 'shoe-heel',
    iconBackgroundColor: '#2bcbba',
    value: 5,
  },
  {
    label: 'Sports',
    iconName: 'basketball',
    iconBackgroundColor: '#45aaf2',
    value: 6,
  },
  {
    label: 'Movies & Music',
    iconName: 'headphones',
    iconBackgroundColor: '#4b7bec',
    value: 7,
  },
];

export const ListingEditScreen = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    })();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          images: [],
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={() => console.log('Results: ', location)}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
        <AppFormField
          name="title"
          placeholder="Title"
          capitalize="none"
          autoCorrect={false}
          maxLength={255}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          capitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8} // 10000.99
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          capitalize="none"
          autoCorrect={false}
          maxLength={255}
          multiline // android only
          numberOfLines={3}
        />
        <AppFormSubmitButton title="post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
