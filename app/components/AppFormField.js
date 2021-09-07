import React from "react";
import { useFormikContext } from "formik";

import { AppTextInput } from "./AppTextInput";
import { AppErrorMessage } from "./AppErrorMessage";

export const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <AppErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};
