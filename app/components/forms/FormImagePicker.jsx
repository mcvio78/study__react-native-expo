import React from 'react';
import { useFormikContext } from 'formik';

import { ImageInputList } from '../ImageInputList';
import { AppErrorMessage } from './AppErrorMessage';

export const FormImagePicker = ({ name }) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri),
    );
  };

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <AppErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};
