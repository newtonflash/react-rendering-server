// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Up = ({ size }) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size }}
  >
    <defs>
      <path
        d="M32,20.7071068 L10.7535534,41.9535534 C10.5582912,42.1488155 10.2417088,42.1488155 10.0464466,41.9535534 C9.85118446,41.7582912 9.85118446,41.4417088 10.0464466,41.2464466 L31.6464466,19.6464466 C31.8417088,19.4511845 32.1582912,19.4511845 32.3535534,19.6464466 L53.9535534,41.2464466 C54.1488155,41.4417088 54.1488155,41.7582912 53.9535534,41.9535534 C53.7582912,42.1488155 53.4417088,42.1488155 53.2464466,41.9535534 L32,20.7071068 Z"
        id="path-1"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-1" fill="white">
        <use xlinkHref="#path-1" />
      </mask>
      <use id="Mask" fill="#111111" fillRule="nonzero" xlinkHref="#path-1" />
      <g
        id="Colors-/-Fill-/-Greyscale-/-Square-/-969696"
        mask="url(#mask-1)"
        fill="currentColor"
      >
        <rect
          id="Fill-/-Greyscale-/-969696"
          x="0"
          y="0"
          width="64"
          height="64"
        />
      </g>
    </g>
  </svg>
);

Up.propTypes = {
  size: PropTypes.string,
};

Up.defaultProps = {
  size: '64px',
};

export default Up;
