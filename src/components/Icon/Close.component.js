// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Close = ({ className }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      d="M13.1213203,12.0606602 L20.1213203,19.0606602 L19.0606602,20.1213203 L12.0606602,13.1213203 L5.06066017,20.1213203 L4,19.0606602 L11,12.0606602 L4,5.06066017 L5.06066017,4 L12.0606602,11 L19.0606602,4 L20.1213203,5.06066017 L13.1213203,12.0606602 Z"
    />
  </svg>
);

Close.propTypes = {
  className: PropTypes.string,
};

Close.defaultProps = {
  className: null,
};

export default Close;
