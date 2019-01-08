import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { Button, Form } from '../../ui-kit';
import { Input } from '../../redux-form-utils/fieldComponents';
import t from '../../i18n';

function AuthView({ handleSubmit }) {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Field
        name="email"
        component={Input}
        icon="user"
        iconPosition="left"
        placeholder="Email"
        autoFocus
        fluid
      />
      <Field
        name="password"
        type="password"
        component={Input}
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        fluid
      />
      <Button primary type="submit" fluid size="large">
        {t('form.submit.login')}
      </Button>
    </Form>
  );
}

AuthView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'AuthForm',
})(AuthView);
