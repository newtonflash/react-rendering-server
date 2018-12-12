// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class ButtonGroup extends React.PureComponent {
  static displayName = 'ButtonGroup';

  static propTypes = {
    variant: PropTypes.oneOf(['equal-widths']).isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { variant, children } = this.props;

    return (
      <div
        className={classNames('ButtonGroup', {
          [`ButtonGroup--variant--${variant}`]: true,
        })}
      >
        {children}
      </div>
    );
  }
}

export default ButtonGroup;
