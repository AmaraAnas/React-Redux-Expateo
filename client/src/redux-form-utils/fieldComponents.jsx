import React from 'react';
import {
  Form,
  Input as SInput,
  Select as SSelect,
  Checkbox as SCheckbox,
} from 'semantic-ui-react';
import RDatePicker, { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale';
import Label from '../elements/label/label';

const withLabel = (label, disabled) => (Field) =>
  label ? (
    <React.Fragment>
      <Label disabled={disabled}>{label}</Label>
      {Field}
    </React.Fragment>
  ) : (
    Field
  );

export function Input({ input, meta, label, disabled, ...rest }) {
  return withLabel(label, disabled)(
    <Form.Field control={SInput} {...input} {...rest} disabled={disabled} />,
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

export function DatePicker({ input: { value, onChange }, label }) {
  registerLocale('fr', fr);
  return withLabel(label)(
    <Form.Field
      control={RDatePicker}
      selected={value}
      onChange={onChange}
      locale="fr"
      dateFormat="dd/MM/yyyy"
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
