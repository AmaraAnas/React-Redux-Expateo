import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Mobility from '../../models/mobility.model';

import { mobilitiesSelector } from '../mobilities/mobilities.selectors';
import { setCurrentMobility } from './mobilities.actions';

const MobilitiesContainer = ({ setCurrentMobility, mobilities, render }) =>
  render({ mobilities, setCurrentMobility });

function mapStateToProps(store) {
  return {
    mobilities: mobilitiesSelector(store),
  };
}

function mapDisaptchToProps(dispatch) {
  return {
    setCurrentMobility: (mobility) => dispatch(setCurrentMobility(mobility)),
  };
}

MobilitiesContainer.propTypes = {
  mobilities: PropTypes.arrayOf(PropTypes.instanceOf(Mobility)).isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps,
)(MobilitiesContainer);
