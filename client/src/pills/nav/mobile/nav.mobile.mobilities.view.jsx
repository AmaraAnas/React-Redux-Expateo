import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Segment } from '../../../ui-kit';

import styles from './nav.mobile.module.css';

const Mobility = ({ title, id }) => (
  <div className={styles.mobility}>
    <Segment className={styles.mobilityLink} as={Link} to={`/mobilities/${id}`}>
      {title}
    </Segment>
  </div>
);

const Mobilities = ({ mobilities }) => (
  <div className={styles.mobilities}>
    {mobilities.map((mobility, i) => (
      <Mobility key={i} {...mobility} />
    ))}
  </div>
);

Mobilities.propTypes = {
  mobilities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Mobilities;
