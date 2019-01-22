import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Mobility from '../../models/mobility.model';

import { mobilitiesSelector } from '../mobilities/mobilities.selectors';

const MobilitiesContainer = ({ mobilities, render }) => render({ mobilities });

function mapStateToProps(store) {
  return {
    mobilities: mobilitiesSelector(store),
  };
}

MobilitiesContainer.propTypes = {
  mobilities: PropTypes.arrayOf(PropTypes.instanceOf(Mobility)).isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MobilitiesContainer);
