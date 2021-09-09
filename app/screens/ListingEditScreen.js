import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("title"),
  price: Yup.number().required().min(1).max(10000).label("price"),
  category: Yup.object().required().nullable().label("category"),
  description: Yup.string().min(1).label("description"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log("Results: ", values)}
        validationSchema={validationSchema}
      >
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
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
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
