// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const Next = ({ className }) => (
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
        d="M22.0464466,10.7535534 C21.8511845,10.5582912 21.8511845,10.2417088 22.0464466,10.0464466 C22.2417088,9.85118446 22.5582912,9.85118446 22.7535534,10.0464466 L44.3535534,31.6464466 C44.5488155,31.8417088 44.5488155,32.1582912 44.3535534,32.3535534 L22.7535534,53.9535534 C22.5582912,54.1488155 22.2417088,54.1488155 22.0464466,53.9535534 C21.8511845,53.7582912 21.8511845,53.4417088 22.0464466,53.2464466 L43.2928932,32 L22.0464466,10.7535534 Z"
        id="next"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-next" fill="white">
        <use xlinkHref="#next" />
      </mask>
      <use fill="#111111" fillRule="nonzero" xlinkHref="#next" />
      <g mask="url(#mask-next)" fill="currentColor">
        <rect x="0" y="0" width="64" height="64" />
      </g>
    </g>
  </svg>
);

Next.propTypes = {
  className: PropTypes.string,
};

Next.defaultProps = {
  className: null,
};

export default Next;
