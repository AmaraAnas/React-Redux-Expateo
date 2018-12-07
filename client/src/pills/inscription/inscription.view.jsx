import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Form, Checkbox, Button, Grid, Select } from 'semantic-ui-react';
import { Input } from '../../redux-form-utils/fieldComponents';
import { strengthIndicator, strengthColor } from './inscription.actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/inscription.page.css';

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

const strong = (value) =>
  value &&
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})/i.test(value)
    ? "It's strong"
    : undefined;

const medium = (value) =>
  value &&
  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i.test(
    value,
  )
    ? "It's medium"
    : undefined;

function InscriptionView({
  handleSubmit,
  password,
  date,
  handleChanges,
  handleDateChanges,
}) {
  const strength = strengthIndicator(password);
  const color = strengthColor(strength);

  return (
    <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <div>
        <label style={inputlabel}>Votre date de départ</label>
        <div style={inputdiv}>
          <DatePicker
            selected={date}
            className="datepickerfull"
            onChange={handleDateChanges}
          />
        </div>
      </div>

      <div>
        <label style={inputlabel}>Votre situation familiale</label>
        <div style={inputdiv}>
          <Field
            component={Select}
            name="family"
            type="text"
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
            type="text"
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
            value={password}
            color={color}
            name="password"
            type="password"
            placeholder="Votre mot de passe"
            onChange={handleChanges}
            validate={[required, strong, medium]}
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
            type="password"
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
