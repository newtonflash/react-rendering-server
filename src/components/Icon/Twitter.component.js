// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Twitter = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className={className}
  >
    <defs>
      <path
        id="twitter"
        d="M32 12.3c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mask-twitter" fill="#fff">
        <use xlinkHref="#twitter" />
      </mask>
      <use fill="currentColor" xlinkHref="#twitter" />
      <g fill="currentColor" mask="url(#mask-twitter)">
        <path d="M0 0h40v40H0z" />
      </g>
    </g>
  </svg>
);

Twitter.propTypes = {
  className: PropTypes.string,
};

Twitter.defaultProps = {
  className: null,
};

export default Twitter;
