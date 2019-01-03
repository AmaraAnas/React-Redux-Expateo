import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Grid, Form, Button, Icon } from 'semantic-ui-react';
import cs from 'classnames';

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

import Animate from '../../elements/animate/animate';

import PasswordCriterias from './inscription.passwordCriterias.view';
import styles from './inscription.module.css';

const minLength12 = minLength(12);
const withMinAlpha6 = withMinAlpha(6);
const withMinNumeric2 = withMinNumeric(2);
const withMinSpecial1 = withMinSpecial(1);
const withMinUpper1 = withMinUpper(1);
const withMinLower1 = withMinLower(1);

function makeCriteria(validator, label) {
  return { label, validator };
}

const passwordCriterias = [
  makeCriteria(minLength12, '12 caractères minimum'),
  makeCriteria(withMinAlpha6, '6 caractères alphabétiques'),
  makeCriteria(withMinNumeric2, '2 caractères numériques'),
  makeCriteria(withMinSpecial1, '1 caractère spécial'),
  makeCriteria(withMinUpper1, '1 caractère majuscule'),
  makeCriteria(withMinLower1, '1 caractère minuscule'),
];

const passwordValidate = [required].concat(
  passwordCriterias.map((criteria) => criteria.validator),
);

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
  passwordError,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Grid stackable>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="startDate"
              component={DatePicker}
              label="Votre date de départ"
              validate={required}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="family"
              component={Select}
              type="text"
              options={familyOptions}
              label="Votre situation familiale"
              placeholder="Votre situation familiale"
              validate={required}
              fluid
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="conjoint"
              component={Input}
              type="text"
              label="Prénom de votre conjoint"
              placeholder="Prénom de votre conjoint"
              disabled={family ? family === 'FAMILLE_SEUL' : true}
              validate={
                (family && family !== 'FAMILLE_SEUL' && required) || optional
              }
              fluid
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column
            width={passwordError ? 12 : 16}
            className={cs({ [styles.slow]: !passwordError })}
          >
            <Field
              name="password"
              component={Input}
              type="password"
              label="Votre mot de passe"
              placeholder="Votre mot de passe"
              validate={passwordValidate}
              icon={
                !passwordError && (
                  <Animate animation="fadeInRight">
                    <Icon color="green" name="check circle" />
                  </Animate>
                )
              }
              fluid
            />
          </Grid.Column>
          {passwordError && (
            <Grid.Column width={4}>
              <PasswordCriterias
                password={password}
                criterias={passwordCriterias}
              />
            </Grid.Column>
          )}
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column
            width={passwordError ? 12 : 16}
            className={cs({
              [styles.slow]: !passwordError,
              [styles.mTop]: passwordError,
            })}
          >
            <Field
              name="confirmpassword"
              component={Input}
              type="password"
              label="Confirmez votre mot de passe"
              placeholder="Confirmez votre mot de passe"
              validate={required}
              fluid
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="cgv"
              component={Checkbox}
              label={
                <label>
                  J’accepte les{' '}
                  <a
                    rel="noopener noreferrer"
                    href="https://expateo.com/cgv"
                    target="_blank"
                  >
                    C.G.V.
                  </a>{' '}
                  d’Expateo
                </label>
              }
              validate={required}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="ads"
              component={Checkbox}
              label="J’accepte de recevoir des mails d’Expateo et de ses partenaires"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Button type="submit" disabled={invalid || error || pristine}>
              Accéder à mon espace personnel
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
    startDate: new Date(),
    family: familyOptions[0].value,
  },
})(InscriptionView);
