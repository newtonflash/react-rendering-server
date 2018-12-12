// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';
import {
  SCREEN_WIDTH_SM_MIN,
  SCREEN_WIDTH_MD_MIN,
  SCREEN_WIDTH_LG_MIN,
  SCREEN_WIDTH_XL_MIN,
  SCREEN_WIDTH_XS_MAX,
  SCREEN_WIDTH_SM_MAX,
  SCREEN_WIDTH_MD_MAX,
  SCREEN_WIDTH_LG_MAX,
} from '../config/config';
import { window } from '../utils/browser';

const mediaQueries = {
  xs: `(max-width: ${SCREEN_WIDTH_XS_MAX}px)`,
  sm: `(min-width: ${SCREEN_WIDTH_SM_MIN}px) and (max-width: ${SCREEN_WIDTH_SM_MAX}px)`,
  md: `(min-width: ${SCREEN_WIDTH_MD_MIN}px) and (max-width: ${SCREEN_WIDTH_MD_MAX}px)`,
  lg: `(min-width: ${SCREEN_WIDTH_LG_MIN}px) and (max-width: ${SCREEN_WIDTH_LG_MAX}px)`,
  xl: `(min-width: ${SCREEN_WIDTH_XL_MIN}px)`,
  minSm: `(min-width: ${SCREEN_WIDTH_SM_MIN}px)`,
  minMd: `(min-width: ${SCREEN_WIDTH_MD_MIN}px)`,
  minLg: `(min-width: ${SCREEN_WIDTH_LG_MIN}px)`,
  minXl: `(min-width: ${SCREEN_WIDTH_XL_MIN}px)`,
  maxXs: `(max-width: ${SCREEN_WIDTH_XS_MAX}px)`,
  maxSm: `(max-width: ${SCREEN_WIDTH_SM_MAX}px)`,
  maxMd: `(max-width: ${SCREEN_WIDTH_MD_MAX}px)`,
  maxLg: `(max-width: ${SCREEN_WIDTH_LG_MAX}px)`,
};

const getDefaultMatch = mqName =>
  'lg minSm minMd minLg maxLg'.split(' ').indexOf(mqName) !== -1;

class ResponsiveDiv extends React.PureComponent {
  static propTypes = {
    /** DEPRECATED! */
    screen: PropTypes.oneOf(Object.keys(mediaQueries)),
    targetWindow: PropTypes.object,
    onChange: PropTypes.func,
    /** NOTE: node type is deprecated, use function only */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };

  static defaultProps = {
    screen: undefined,
    targetWindow: undefined,
    onChange: undefined,
  };

  state = {
    matches: {},
  };

  mediaQueryListsByName = {};

  componentWillMount() {
    const targetWindow = this.props.targetWindow || window;
    if (!targetWindow) {
      return;
    }

    if (
      typeof targetWindow.matchMedia === 'function' &&
      // eslint-disable-next-line no-underscore-dangle
      !targetWindow.matchMedia.__polyfill
    ) {
      Object.keys(mediaQueries).map(mqName => {
        const mq = mediaQueries[mqName];
        this.mediaQueryListsByName[mqName] = targetWindow.matchMedia(mq);
        this.mediaQueryListsByName[mqName].addListener(
          this.handleMediaQueryMatchChange,
        );
      });
    }

    this.updateMatches(false);
  }

  componentWillUnmount() {
    Object.keys(this.mediaQueryListsByName).map(mqName => {
      this.mediaQueryListsByName[mqName].removeListener(
        this.handleMediaQueryMatchChange,
      );
    });
    this.mediaQueryListsByName = {};

    if (this.updateMatchesRAF) {
      window.cancelAnimationFrame(this.updateMatchesRAF);
      delete this.updateMatchesRAF;
    }
  }

  updateMatches(callOnChange = true) {
    const matches = {};
    Object.keys(mediaQueries).map(mqName => {
      matches[mqName] = this.mediaQueryListsByName[mqName]
        ? this.mediaQueryListsByName[mqName].matches
        : getDefaultMatch(mqName);
    });
    this.setState(
      { matches },
      callOnChange
        ? () => {
            if (this.props.onChange) {
              this.props.onChange(matches);
            }
          }
        : undefined,
    );
  }

  handleMediaQueryMatchChange = () => {
    if (this.updateMatchesRAF) {
      window.cancelAnimationFrame(this.updateMatchesRAF);
    }
    this.updateMatchesRAF = window.requestAnimationFrame(() =>
      this.updateMatches(),
    );
  };

  render() {
    const { screen, children } = this.props;
    const { matches } = this.state;

    if (screen) {
      // For now let's simulate lg screen size on test environment
      const screenMatches = matches[screen];
      if (typeof children === 'function') {
        return children(screenMatches);
      }
      return screenMatches ? children : null;
    }

    if (!children || typeof children !== 'function') {
      throw new TypeError(`ResponsiveDiv#props#children must be a function`);
    }

    return children(matches);
  }
}

export default ResponsiveDiv;
