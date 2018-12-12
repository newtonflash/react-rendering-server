// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Facebook = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className={className}
  >
    <defs>
      <path
        id="fb"
        d="M17.032 31L17 21h-4v-4h4v-2.5c0-3.711 2.298-5.5 5.61-5.5 1.585 0 2.948.118 3.345.17v3.88H23.66c-1.8 0-2.15.856-2.15 2.112V17h5.241l-2 4h-3.24v10h-4.478z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mask-fb" fill="#fff">
        <use xlinkHref="#fb" />
      </mask>
      <use fill="currentColor" xlinkHref="#fb" />
      <g fill="currentColor" mask="url(#mask-fb)">
        <path d="M0 0h40v40H0z" />
      </g>
    </g>
  </svg>
);

Facebook.propTypes = {
  className: PropTypes.string,
};

Facebook.defaultProps = {
  className: null,
};

export default Facebook;
