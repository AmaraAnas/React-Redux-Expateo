import React from 'react';
import RDatePicker, { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale';

import {
  Form,
  Input as SInput,
  Select as SSelect,
  Checkbox as SCheckbox,
} from '../ui-kit';
import Label from '../elements/label/label';

const withLabel = (label, disabled) => (Field) => {
  let id = Math.trunc(Math.random() * 10000); // WARN: maybe bugish
  return label ? (
    <React.Fragment>
      <Label htmlFor={id} disabled={disabled}>
        {label}
      </Label>
      {React.cloneElement(Field, { id })}
    </React.Fragment>
  ) : (
    Field
  );
};

export function Input({
  input,
  meta,
  label,
  disabled,
  placeholder = 'Ecrire ici',
  ...rest
}) {
  return withLabel(label, disabled)(
    <Form.Field
      control={SInput}
      {...input}
      {...rest}
      disabled={disabled}
      placeholder={placeholder}
    />,
  );
}

export function Select({ input: { onChange, value }, meta, label, ...rest }) {
  return withLabel(label)(
    <Form.Field
      control={SSelect}
      onChange={(_, { value }) => onChange(value)}
      value={value}
      {...rest}
    />,
  );
}

export function DatePicker({ input: { value, onChange }, label, placeholder }) {
  registerLocale('fr', fr);
  return withLabel(label)(
    <Form.Field
      control={RDatePicker}
      selected={value}
      onChange={onChange}
      locale="fr"
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholder}
      customInput={<SInput fluid />}
    />,
  );
}

export function Checkbox({ input: { value, onChange }, ...rest }) {
  return (
    <Form.Field
      control={SCheckbox}
      checked={Boolean(value)}
      onChange={(_, { checked }) => onChange(checked)}
      {...rest}
    />
  );
}
