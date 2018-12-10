import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { inscription } from './inscription.actions';
import InscriptionViewForm from './inscription.view';

// TODO: Handle submit request + Redirection
// TODO: Write some test (should render)
class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ startDate, family, conjoint, password, confirmpassword, cgv }) {
    const { dispatch, onInscription } = this.props;
    dispatch(
      inscription({
        startDate,
        family,
        conjoint,
        password,
        confirmpassword,
        cgv,
        onSuccess: (user) => {
          onInscription(user);
        },
        onFailure: (e) => {
          console.log(e);
        },
      }),
    );
  }
  render() {
    return (
      <InscriptionViewForm
        onSubmit={this.handleLogin}
        family={this.props.family}
      />
    );
  }
}

const selector = formValueSelector('InscriptionForm');
export default connect((state) => ({
  family: selector(state, 'family'),
}))(InscriptionContainer);
