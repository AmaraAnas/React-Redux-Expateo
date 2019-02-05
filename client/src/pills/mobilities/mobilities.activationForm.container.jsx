import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import {
  showBigLoaderModal,
  showErrorModal,
  destroy,
} from '../modal/modal.actions';

import { activateCurrentMobility } from './mobilities.actions';
import SubscriptionMobilityActivationFormView from './mobilities.activationForm.view';

const familyFieldOptions = [
  { text: 'Seule', value: 'FAMILLE_SEUL' },
  { text: 'En concubinage', value: 'FAMILLE_CONCUBINAGE' },
  { text: 'Pacsé', value: 'FAMILLE_PACSE' },
  { text: 'Marié', value: 'FAMILLE_MARIE' },
];

class SubscriptionMobilityActivationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formValues) {
    const { dispatch, onMobilityActivation } = this.props;
    const destroyModal = () => dispatch(destroy());
    const dispatchErrorModal = () =>
      dispatch(
        showErrorModal({
          title: 'Oupss... Une erreur est survenue :(',
          message: "Si l'erreur persiste contactez un adminstrateur. Merci.",
        }),
      );
    dispatch(
      activateCurrentMobility({
        ...formValues,
        onPending: () =>
          dispatch(
            showBigLoaderModal({
              content: 'Activation de la mobilité en cours...',
            }),
          ),
        onSuccess: (mobility) => {
          destroyModal();
          onMobilityActivation(mobility);
        },
        onFailure: () => {
          destroyModal();
          dispatchErrorModal();
        },
      }),
    );
  }

  render() {
    const { family } = this.props;
    return (
      <SubscriptionMobilityActivationFormView
        onSubmit={this.handleSubmit}
        family={family}
        familyFieldOptions={familyFieldOptions}
      />
    );
  }
}

SubscriptionMobilityActivationFormContainer.propTypes = {
  onMobilityActivation: PropTypes.func.isRequired,
};

const selector = formValueSelector('SubscriptionMobilityActivationForm');

export default connect((state) => ({
  family: selector(state, 'family'),
}))(SubscriptionMobilityActivationFormContainer);
