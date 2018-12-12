// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Prev = ({ className }) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <path
        d="M20.7071068,32 L41.9535534,53.2464466 C42.1488155,53.4417088 42.1488155,53.7582912 41.9535534,53.9535534 C41.7582912,54.1488155 41.4417088,54.1488155 41.2464466,53.9535534 L19.6464466,32.3535534 C19.4511845,32.1582912 19.4511845,31.8417088 19.6464466,31.6464466 L41.2464466,10.0464466 C41.4417088,9.85118446 41.7582912,9.85118446 41.9535534,10.0464466 C42.1488155,10.2417088 42.1488155,10.5582912 41.9535534,10.7535534 L20.7071068,32 Z"
        id="prev"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-prev" fill="white">
        <use xlinkHref="#prev" />
      </mask>
      <use fill="#111111" fillRule="nonzero" xlinkHref="#prev" />
      <g mask="url(#mask-prev)" fill="currentColor">
        <rect x="0" y="0" width="64" height="64" />
      </g>
    </g>
  </svg>
);

Prev.propTypes = {
  className: PropTypes.string,
};

Prev.defaultProps = {
  className: null,
};

export default Prev;
