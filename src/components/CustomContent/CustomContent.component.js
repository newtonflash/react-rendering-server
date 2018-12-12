// This file is maintained by storybook, not to be modified
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class CustomContent extends React.PureComponent {
  static displayName = 'CustomContent';

  static propTypes = {
    variant: PropTypes.oneOf(['small', 'large']),
    /**
     * HTML string that will be injected directly as a child of this component. (Ignored, if `children` is present.)
     * **IMPORTANT NOTE**: this html won't be sanitized - it might introduce XSS vulnerability!
     * */
    innerHTML: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    variant: 'small',
    innerHTML: undefined,
    children: undefined,
  };

  render() {
    const { variant, innerHTML, children } = this.props;
    const className = classNames('CustomContent', {
      [`CustomContent--variant--${variant}`]: true,
    });
    return innerHTML ? (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    ) : (
      <div className={className}>{children}</div>
    );
  }
}

export default CustomContent;
