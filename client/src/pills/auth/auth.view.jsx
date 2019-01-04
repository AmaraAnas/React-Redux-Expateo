import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { Button, Form, Icon } from '../../ui-kit';
import { Input } from '../../redux-form-utils/fieldComponents';

function AuthView({ handleSubmit }) {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Field
        name="username"
        component={Input}
        icon="user"
        iconPosition="left"
        placeholder="Username"
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
      <Button type="submit" animated="vertical" color="blue" fluid size="large">
        <Button.Content visible>S'identifier</Button.Content>
        <Button.Content hidden>
          <Icon name="sign-in" />
        </Button.Content>
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