// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Play = ({ className }) => (
  <svg
    height="1em"
    viewBox="0 0 64 64"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle id="Oval-2" fill="#FFFFFF" cx="32" cy="32" r="32" />
      <polygon
        id="Triangle"
        fill="currentColor"
        points="45.503309 31.6544758 23.7408568 44.8438407 23.7408568 18.4651109"
      />
    </g>
  </svg>
);

Play.propTypes = {
  className: PropTypes.string,
};

Play.defaultProps = {
  className: null,
};

export default Play;
