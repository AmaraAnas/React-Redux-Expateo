import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Grid, Form, Button } from 'semantic-ui-react';
import { PasswordCriterias } from '../../redux-form-utils/PasswordCriterias';

import {
  Input,
  Select,
  DatePicker,
  Checkbox,
} from '../../redux-form-utils/fieldComponents';

import {
  required,
  optional,
  minLength,
  withMinAlpha,
  withMinNumeric,
  withMinSpecial,
  withMinLower,
  withMinUpper,
} from '../../redux-form-utils/fieldValidators';

const passwordValidate = [
  required,
  minLength(12),
  withMinAlpha(6),
  withMinNumeric(2),
  withMinSpecial(1),
  withMinUpper(1),
  withMinLower(1),
];

const validate = (values) => {
  const errors = {};
  const { password, confirmpassword } = values;
  if (password !== confirmpassword) {
    errors.confirmpassword = 'Should be the same as password';
  }
  return errors;
};

const familyOptions = [
  { text: 'Seule', value: 'FAMILLE_SEUL' },
  { text: 'En concubinage', value: 'FAMILLE_CONCUBINAGE' },
  { text: 'Pacsé', value: 'FAMILLE_PACSE' },
  { text: 'Marié', value: 'FAMILLE_MARIE' },
];

function InscriptionView({
  family,
  password,
  handleSubmit,
  invalid,
  pristine,
  error,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="startDate"
        component={DatePicker}
        label="Votre date de départ"
        validate={required}
      />
      <Field
        name="family"
        component={Select}
        type="text"
        options={familyOptions}
        defaultValue={familyOptions[0].value}
        label="Votre situation familiale"
        placeholder="Votre situation familiale"
        validate={required}
        fluid
      />
      <Field
        name="conjoint"
        component={Input}
        type="text"
        label="Prénom de votre conjoint"
        placeholder="Prénom de votre conjoint"
        disabled={family ? family === 'FAMILLE_SEUL' : true}
        validate={(family && family !== 'FAMILLE_SEUL' && required) || optional}
        fluid
      />
      <Grid style={{ height: '200px' }}>
        <Grid.Column
          style={{
            maxWidth: '50%',
            width: '50%',
          }}
        >
          <Field
            name="password"
            component={Input}
            type="text"
            label="Votre mot de passe"
            placeholder="Votre mot de passe"
            validate={passwordValidate}
            fluid
          />
        </Grid.Column>
        <Grid.Column
          style={{
            maxWidth: '50%',
            width: '50%',
          }}
        >
          <PasswordCriterias
            password={password}
            validators={passwordValidate}
          />
        </Grid.Column>
      </Grid>
      <Field
        name="confirmpassword"
        component={Input}
        type="password"
        label="Confirmez votre mot de passe"
        placeholder="Confirmez votre mot de passe"
        validate={required}
        fluid
      />
      <Field
        name="cgv"
        component={Checkbox}
        label="J’accepte les CGV d’Expateo"
        validate={required}
      />
      <Field
        name="ads"
        component={Checkbox}
        label="J’accepte de recevoir des mails d’Expateo et de ses partenaires"
      />

      <Button type="submit" disabled={invalid || error || pristine}>
        Accéder à mon espace personnel
      </Button>
    </Form>
  );
}

InscriptionView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'InscriptionForm',
  validate,
  initialValues: {
    startDate: '',
    family: familyOptions[0].value,
  },
})(InscriptionView);
