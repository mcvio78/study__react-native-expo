import React from 'react';
import { useFormikContext } from 'formik';

import { AppTextInput } from '../AppTextInput';
import { AppErrorMessage } from './AppErrorMessage';

export const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, errors, touched, setFieldValue, values } = useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        {...otherProps}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
      />
      <AppErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};
