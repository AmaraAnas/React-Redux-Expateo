import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import cs from 'classnames';

import { Grid, Form, Button, Icon } from '../../ui-kit';
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
import t from '../../i18n';

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

function InscriptionView({
  family,
  password,
  handleSubmit,
  invalid,
  pristine,
  error,
  passwordError,
  confirmPasswordError,
  familyFieldOptions,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Grid stackable>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="startDate"
              component={DatePicker}
              label={t('form.fields.start_date.label')}
              placeholder={t('form.fields.start_date.placeholder')}
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
              options={familyFieldOptions}
              label={t('form.fields.family.label')}
              placeholder={t('form.fields.family.placeholder')}
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
              label={t('form.fields.conjoint.label')}
              placeholder={t('form.fields.conjoint.placeholder')}
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
              label={t('form.fields.password.label')}
              placeholder={t('form.fields.password.placeholder')}
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
              label={t('form.fields.confirmpassword.label')}
              placeholder={t('form.fields.confirmpassword.placeholder')}
              validate={required}
              icon={
                !confirmPasswordError ? (
                  <Animate animation="fadeInRight">
                    <Icon color="green" name="check circle" />
                  </Animate>
                ) : (
                  <Animate animation="fadeInRight">
                    <Icon color="red" name="times circle" />
                  </Animate>
                )
              }
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
                <label dangerouslySetInnerHTML={{ __html: t('form.cgu') }} />
              }
              validate={required}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="allowEmail"
              component={Checkbox}
              label={t('form.ad')}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Button
              type="submit"
              disabled={invalid || error || pristine}
              primary={!invalid && !error && !pristine}
            >
              {t('form.submit.inscription')}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
}

InscriptionView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  family: PropTypes.string,
  familyFieldOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  password: PropTypes.string,
  passwordError: PropTypes.string,
  confirmPasswordError: PropTypes.string,
};

export default reduxForm({
  form: 'InscriptionForm',
  validate,
  initialValues: {
    startDate: new Date(),
  },
})(InscriptionView);
