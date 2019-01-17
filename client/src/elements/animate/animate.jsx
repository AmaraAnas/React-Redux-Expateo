import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.min.css';

/**
 * Simple wrapper on http://daneden.github.io/animate.css
 */
export default function Animate({ animation, children }) {
  return React.cloneElement(children, { className: `animated ${animation}` });
}

Animate.propTypes = {
  /**
   * @see https://github.com/daneden/animate.css#animations
   */
  animation: PropTypes.oneOf([
    'fadeOutRight',
    'fadeInRight',
    'fadeInRight faster',
    'fadeInDown',
    'bounce',
  ]).isRequired,
};
