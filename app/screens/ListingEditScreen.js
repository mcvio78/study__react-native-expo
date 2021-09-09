import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../components/forms";
import { AppFormPicker } from "../components/forms/AppFormPicker";
import { AppPicker } from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("title"),
  price: Yup.number().required().min(1).label("price"),
  category: Yup.object().required().nullable(true).label("category"),
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
        />
        <AppFormField
          name="price"
          placeholder="Price"
          capitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          placeholder="category"
          items={categories}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          capitalize="none"
          autoCorrect={false}
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
