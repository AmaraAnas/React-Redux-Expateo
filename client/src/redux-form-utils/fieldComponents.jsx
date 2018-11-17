import React from 'react';
import { Form, Input as SMInput } from 'semantic-ui-react';

export function Input({ input, ...rest }) {
  return <Form.Field control={SMInput} {...input} {...rest} />;
}
