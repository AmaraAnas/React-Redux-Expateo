import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import cs from 'classnames';

import { Grid, Form, Button, Icon } from '../../ui-kit';
import {
  Input,
  Select,
  DatePicker,
} from '../../redux-form-utils/fieldComponents';

import { required, optional } from '../../redux-form-utils/fieldValidators';

import t from '../../i18n';

//TODO : remove magic strings + create load api as B2B inscription
const familyFieldOptions = [
  {
    value: 'FAMILLE_MARIE',
    text: 'Couple marié',
  },
  {
    value: 'FAMILLE_PACSE',
    text: 'Couple Pacsé',
  },
  {
    value: 'FAMILLE_CONCUBINAGE',
    text: 'En concubinage',
  },
  {
    value: 'FAMILLE_SEUL',
    text: 'Seul',
  },
];

const childrenFieldOptions = [
  {
    value: 0,
    text: '0',
  },
  {
    value: 1,
    text: '1',
  },
  {
    value: 2,
    text: '2',
  },
  {
    value: 3,
    text: '3',
  },
];

function MobilityFormView({ family, handleSubmit, invalid, pristine, error }) {
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
            <Field
              name="children"
              component={Select}
              type="text"
              options={childrenFieldOptions}
              label="Partez vous avec des enfants ?"
              placeholder="Partez vous avec des enfants ?"
              validate={required}
              fluid
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={1}>
          <Button
            type="submit"
            disabled={invalid || error || pristine}
            primary={!invalid && !error && !pristine}
          >
            VALIDER CES INFORMATIONS
          </Button>
        </Grid.Row>
      </Grid>
    </Form>
  );
}

MobilityFormView.propTypes = {
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
  form: 'MobilityForm',
  initialValues: {
    startDate: new Date(),
  },
})(MobilityFormView);
