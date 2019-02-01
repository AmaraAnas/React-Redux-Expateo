import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobilityFormView from './mobilityForm.view';
import { formValueSelector, getFormSyncErrors } from 'redux-form';
import { getInitialValues } from './mobilityForm.action';
import { updateMobility } from '../mobilities.actions';
import t from '../../../i18n';
import {
  showBigLoaderModal,
  showErrorAlertModal,
  destroy,
} from '../../modal/modal.actions';

class MobilityInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childFieldOptions: [],
      familyFieldOptions: [],
    };
    this.handleValidation = this.handleValidation.bind(this);
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

  handleValidation({ ...formValues }) {
    const { dispatch, getState } = this.props;
    const destroyModal = () => dispatch(destroy());

    dispatch(
      updateMobility({
        ...formValues,
        onPending: () =>
          dispatch(
            showBigLoaderModal({ content: t('modals.mobility_loading') }),
          ),
        onSuccess: (mobility) => {
          destroyModal();
        },
        onFailure: () => {
          dispatch(
            showErrorAlertModal(
              {
                title: t('modals.mobility_error'),
                onClose: () => dispatch(destroy()),
              },
              dispatch,
            ),
          );
        },
      }),
    );
  }

  render() {
    const { family, syncErrors } = this.props;
    const { familyFieldOptions, childFieldOptions } = this.state;
    return (
      <MobilityFormView
        onSubmit={this.handleValidation}
        family={family}
        familyFieldOptions={familyFieldOptions}
        childFieldOptions={childFieldOptions}
      />
    );
  }
}

MobilityInfoContainer.propTypes = {
  onSave: PropTypes.func.isRequired,
};

const selector = formValueSelector('MobilityForm');
const syncErrorsSelector = getFormSyncErrors('MobilityForm');

export default connect((state) => ({
  family: selector(state, 'family'),
  syncErrors: syncErrorsSelector(state),
}))(MobilityInfoContainer);
