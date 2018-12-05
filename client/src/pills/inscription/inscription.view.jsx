import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Form, Checkbox, Button, Grid, Select } from 'semantic-ui-react';
import '../../styles/inscription.page.css';
import { Input } from '../../redux-form-utils/fieldComponents';

const familyOptions = [
  { key: 's', text: 'Seule', value: 'FAMILLE_SEUL' },
  { key: 'c', text: 'En concubinage', value: 'FAMILLE_CONCUBINAGE' },
  { key: 'p', text: 'Pacsé', value: 'FAMILLE_PACSE' },
  { key: 'm', text: 'Marié', value: 'FAMILLE_MARIE' },
];

const inputlabel = {
  color: '#0071BD',
  fontWeight: '700',
};

const inputdiv = {
  marginTop: '10px',
  marginBottom: '10px',
};

const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Required';
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength12 = minLength(12);
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

function InscriptionView({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <div>
        <label style={inputlabel}>Votre date de départ</label>
        <div style={inputdiv}>
          <Field
            component={Input}
            name="date"
            placeholder="Votre date de départ"
            validate={[required]}
            fluid
          />
        </div>
      </div>

      <div>
        <label style={inputlabel}>Votre situation familiale</label>
        <div style={inputdiv}>
          <Field
            component={Select}
            name="family"
            options={familyOptions}
            placeholder="Votre situation familiale"
            search
            fluid
            validate={[required]}
            searchInput={{ id: 'form-select-control-family' }}
          />
        </div>
      </div>

      <div>
        <label style={inputlabel}>Prénom de votre conjoint</label>
        <div style={inputdiv}>
          <Field
            component={Input}
            name="conjoint"
            placeholder="Prénom de votre conjoint"
            validate={[required]}
            fluid
          />
        </div>
      </div>

      <div>
        <label style={inputlabel}>Votre mot de passe</label>
        <div style={inputdiv}>
          <Field
            component={Input}
            name="password"
            placeholder="Votre mot de passe"
            validate={[required, minLength12]}
            fluid
          />
        </div>
      </div>

      <div>
        <label style={inputlabel}>Confirmez votre mot de passe</label>
        <div style={inputdiv}>
          <Field
            component={Input}
            name="confirmpassword"
            placeholder="Confirmez votre mot de passe"
            validate={[required]}
            fluid
          />
        </div>
      </div>

      <Form.Field>
        <Checkbox label="J’accepte les CGV d’Expateo" />
        <Checkbox label="J’accepte de recevoir des mails d’Expateo et de ses partenaires" />
      </Form.Field>

      <Grid textAlign="center">
        <Grid.Column>
          <Button type="submit">Accéder à mon espace personnel</Button>
        </Grid.Column>
      </Grid>
    </Form>
  );
}

InscriptionView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'InscriptionForm',
})(InscriptionView);
