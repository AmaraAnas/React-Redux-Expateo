import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Mobility from '../../models/mobility.model';
import { useDispatch, withHook } from '../../hooks/useDispatch.hook';

import { mobilitiesSelector } from '../mobilities/mobilities.selectors';
import { setCurrentMobility, getMobilities } from './mobilities.actions';
import {
  showBigLoaderModal,
  destroy,
  showErrorAlertModal,
} from '../modal/modal.actions';

// TODO: i18n
const MobilitiesContainer = ({ setCurrentMobility, mobilities, render }) =>
  render({ mobilities, setCurrentMobility });

function mapStateToProps(store) {
  return {
    mobilities: mobilitiesSelector(store),
  };
}

function mapDisaptchToProps(dispatch) {
  return {
    ...useDispatch(dispatch)(getMobilities),
    setCurrentMobility: async (mobility) => {
      return new Promise((resolve, reject) => {
        dispatch(showBigLoaderModal({ content: 'Chargement de la mobilité' }));
        dispatch(
          setCurrentMobility({
            mobility,
            onSuccess: resolve,
            onFailure: reject,
          }),
        );
      })
        .then((currentMobility) => {
          dispatch(destroy());
          return currentMobility;
        })
        .catch(() =>
          dispatch(
            showErrorAlertModal({ title: 'Une erreur est survenue :(' }),
          ),
        );
    },
  };
}

MobilitiesContainer.propTypes = {
  mobilities: PropTypes.arrayOf(PropTypes.instanceOf(Mobility)).isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps,
)(withHook(useDispatch)(MobilitiesContainer));
