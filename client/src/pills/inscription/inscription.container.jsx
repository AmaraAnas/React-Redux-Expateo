import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { inscription } from './inscription.actions';
import InscriptionViewForm from './inscription.view';

// TODO: Handle submit request + Redirection
// TODO: Write some test (should render)
class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ startDate, family, conjoint, password, confirmpassword, ads }) {
    const { dispatch, onInscription, userIDs } = this.props;
    dispatch(
      inscription({
        userIDs,
        startDate,
        family,
        conjoint,
        password,
        confirmpassword,
        ads,
        onSuccess: (user) => {
          onInscription(user);
          console.log(user);
        },
        onFailure: (e) => {
          console.log('Inscription Failed');
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

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
};

const selector = formValueSelector('InscriptionForm');
export default connect((state) => ({
  family: selector(state, 'family'),
}))(InscriptionContainer);
