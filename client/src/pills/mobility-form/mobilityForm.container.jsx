import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobilityFormView from './mobilityForm.view';
import { formValueSelector, getFormSyncErrors } from 'redux-form';

//TODO : handleValidation Action
class MobilityInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyFieldOptions: [],
    };
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleValidation() {}

  render() {
    const { family, syncErrors } = this.props;
    const { familyFieldOptions } = this.state;
    return (
      <MobilityFormView
        onSubmit={this.handleValidation}
        family={family}
        familyFieldOptions={familyFieldOptions}
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
