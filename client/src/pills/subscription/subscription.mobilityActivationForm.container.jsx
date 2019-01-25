import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Redirect } from 'react-router-dom';

import {
  showBigLoaderModal,
  showErrorModal,
  destroy,
} from '../modal/modal.actions';

import { mobilityActivation, getInitialValues } from './subscription.actions';
import SubscriptionMobilityActivationFormView from './subscription.mobilityActivationForm.view';

class SubscriptionMobilityActivationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobilityAlreadyInitialized: false,
      familyFieldOptions: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, userGuid, familyGuid, clGuid } = this.props;
    const destroyModal = () => dispatch(destroy());
    dispatch(
      getInitialValues({
        userGuid,
        familyGuid,
        clGuid,
        onPending: () => dispatch(showBigLoaderModal({ content: '' })),
        onSuccess: ({ isMobilityAlreadyInitialized, familyFieldOptions }) => {
          destroyModal();
          this.setState({ isMobilityAlreadyInitialized, familyFieldOptions });
        },
        onFailure: () => destroyModal(),
      }),
    );
  }

  handleSubmit(formValues) {
    const {
      dispatch,
      onMobilityActivation,
      userGuid,
      familyGuid,
      clGuid,
    } = this.props;
    const destroyModal = () => dispatch(destroy());
    const dispatchErrorModal = () =>
      dispatch(
        showErrorModal({
          title: 'Oupss... Une erreur est survenue :(',
          message: "Si l'erreur persiste contactez un adminstrateur. Merci.",
        }),
      );
    dispatch(
      mobilityActivation({
        userGuid,
        familyGuid,
        clGuid,
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
    const { isMobilityAlreadyInitialized, familyFieldOptions } = this.state;
    if (isMobilityAlreadyInitialized) {
      return <Redirect to="/mobilities" />;
    }
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
  userGuid: PropTypes.string.isRequired,
  familyGuid: PropTypes.string.isRequired,
  clGuid: PropTypes.string.isRequired,
};

const selector = formValueSelector('SubscriptionMobilityActivationForm');

export default connect((state) => ({
  family: selector(state, 'family'),
}))(SubscriptionMobilityActivationFormContainer);
