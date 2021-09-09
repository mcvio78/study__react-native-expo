import React from "react";
import { useFormikContext } from "formik";

import { AppPicker } from "../AppPicker";
import { AppErrorMessage } from "./AppErrorMessage";
import { AppText } from "../AppText";

export const AppFormPicker = ({ name, placeholder, items }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        onSelectedItem={
          (item) => setFieldValue("category", item)
          // () => setFieldTouched(name)
        }
        selectedItem={values["category"]}
      />
      <AppErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};
