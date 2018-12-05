import React from 'react';
import { Form, Input as SMInput } from 'semantic-ui-react';

export function Input({
  input,
  placeholder,
  meta: { touched, error, warning },
  ...rest
}) {
  return (
    <div>
      <input {...input} placeholder={placeholder} type="text" />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
}
