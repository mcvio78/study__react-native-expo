import React from 'react';
import { useFormikContext } from 'formik';

import { AppTextInput } from '../AppTextInput';
import { AppErrorMessage } from './AppErrorMessage';

export const AppFormField = ({ name, width, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <AppErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};
