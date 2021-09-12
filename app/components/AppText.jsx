import React from 'react';
import { Text } from 'react-native';

import { defaultStyles } from '../config/styles';

export const AppText = ({ children, style, ...otherProps }) => (
  <Text style={[defaultStyles.text, style]} {...otherProps}>
    {children}
  </Text>
);
