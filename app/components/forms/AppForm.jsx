import React from 'react';
import { ScrollView } from 'react-native';
import { Formik } from 'formik';

export const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {() => <ScrollView>{children}</ScrollView>}
  </Formik>
);
