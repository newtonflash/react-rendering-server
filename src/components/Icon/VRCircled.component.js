// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

const VR = ({ className }) => (
  <svg
    height="1em"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g strokeWidth="1" stroke="currentColor" fill="none" fillRule="evenodd">
      <circle cx="16" cy="16" r="15.5" />
      <path d="M11.6678775,14.146346 C10.5645491,14.1470816 9.65785273,14.9810335 9.65792521,15.995218 C9.65807016,17.0223766 10.5675207,17.8590704 11.6766473,17.852249 C12.7854841,17.8454945 13.6747858,17.0185646 13.6739885,15.995218 C13.6731188,14.9754159 12.772728,14.1456772 11.6678775,14.146346 Z M21.11303,14.1464797 C20.0073822,14.1466135 19.1078612,14.9754827 19.1071364,15.9951511 C19.1062666,17.0255867 20.0099914,17.8589367 21.1211475,17.8525834 C22.2269401,17.8461632 23.1229823,17.0148864 23.1230548,15.995218 C23.1230548,14.9808329 22.215851,14.146346 21.11303,14.1464797 Z M24.9750781,16.000635 C24.9750781,16.9199215 24.975513,17.8392749 24.9748607,18.7585615 C24.9744983,19.246226 24.6860369,19.5109238 24.1569495,19.5104557 C22.2428128,19.5089844 20.328676,19.5061087 18.4145392,19.5076469 C18.291472,19.5077806 18.226532,19.4740748 18.1620268,19.372556 C17.7641966,18.7465905 17.1679948,18.4037808 16.3785674,18.4127423 C15.585806,18.4217706 14.9861253,18.7677904 14.5975722,19.4084019 C14.5474176,19.4909946 14.4954511,19.5123283 14.4008677,19.5121945 C12.4505645,19.5100544 10.5001889,19.511392 8.54981324,19.5099876 C8.12175979,19.5096532 7.80938078,19.2367295 7.80836609,18.8425585 C7.80365504,16.9482104 7.80387248,15.0537953 7.80807618,13.1594471 C7.80894592,12.7674162 8.12371668,12.4886074 8.54807378,12.4885405 C13.7832849,12.4875374 19.0184236,12.4876042 24.2535623,12.4884736 C24.6735708,12.4885405 24.9729038,12.7804571 24.9741359,13.1924842 C24.9768176,14.1284899 24.9750056,15.0645625 24.9750781,16.000635 Z" />
    </g>
  </svg>
);

VR.propTypes = {
  className: PropTypes.string,
};

VR.defaultProps = {
  className: null,
};

export default VR;