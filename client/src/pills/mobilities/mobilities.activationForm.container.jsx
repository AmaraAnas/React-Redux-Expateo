import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { getInitialValues } from './mobilities.activationForm.utils';

import {
  showBigLoaderModal,
  showErrorModal,
  destroy,
} from '../modal/modal.actions';

import {
  setCurrentMobility,
  activateCurrentMobility,
} from './mobilities.actions';
import SubscriptionMobilityActivationFormView from './mobilities.activationForm.view';

class SubscriptionMobilityActivationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childFieldOptions: [],
      familyFieldOptions: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(
      getInitialValues({
        onPending: () => {},
        onSuccess: (res) => {
          this.setState(res);
        },
        onFailure: () => {},
      }),
    );
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
    const { familyFieldOptions, childFieldOptions } = this.state;
    return (
      <SubscriptionMobilityActivationFormView
        onSubmit={this.handleSubmit}
        family={family}
        familyFieldOptions={familyFieldOptions}
        childFieldOptions={childFieldOptions}
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
