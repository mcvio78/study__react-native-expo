import React from "react";
import { useFormikContext } from "formik";

import { AppPicker } from "../AppPicker";
import { AppErrorMessage } from "./AppErrorMessage";

export const AppFormPicker = ({ name, placeholder, items }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};
