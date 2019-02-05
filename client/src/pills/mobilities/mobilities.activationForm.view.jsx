import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Grid, Form, Button } from '../../ui-kit';
import {
  Input,
  Select,
  DatePicker,
} from '../../redux-form-utils/fieldComponents';
import { required, optional } from '../../redux-form-utils/fieldValidators';
import t from '../../i18n';

function SubscriptionMobilityActivationFormView({
  handleSubmit,
  invalid,
  pristine,
  error,
  family,
  familyFieldOptions,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Grid stackable>
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

SubscriptionMobilityActivationFormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  family: PropTypes.string,
  familyFieldOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default reduxForm({
  form: 'SubscriptionMobilityActivationForm',
  initialValues: {
    startDate: new Date(),
  },
})(SubscriptionMobilityActivationFormView);
