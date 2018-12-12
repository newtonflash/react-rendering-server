// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconUp from '../Icon/Up.component';
import IconRight from '../Icon/Right.component';
import IconVR from '../Icon/VR.component';
import IconVRCircled from '../Icon/VRCircled.component';
import IconClose from '../Icon/Close.component';

import ButtonGroup from './ButtonGroup.component';

const icons = {
  Up: IconUp,
  Right: IconRight,
  VR: IconVR,
  VRCircled: IconVRCircled,
  Close: IconClose,
};

function renderIcon(icon, { align }) {
  const Icon = icons[icon];
  return (
    <span
      className={`Button__icon Button__icon--align-${align} Button__icon--${
        Icon ? `icon-${icon}` : 'custom'
      }`}
    >
      {Icon ? <Icon /> : icon}
    </span>
  );
}

class Button extends React.PureComponent {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
      'tertiary-gray',
    ]),

    size: PropTypes.oneOf([
      'inline',
      'small',
      'medium',
      'medium-padded',
      'large',
    ]),

    /** If true, the button will be formatted to appear on dark backgrounds. */
    inverted: PropTypes.bool,

    /** If true, the button will take the full width of its container. */
    fluid: PropTypes.bool,

    disabled: PropTypes.bool,

    id: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    /** The role of the HTML element. */
    role: PropTypes.string,
    target: PropTypes.string,
    /** Default value: `as === 'button' ? 'button' : undefined` */
    type: PropTypes.string,
    title: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    iconLeft: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.oneOf(['Up', 'Right']),
    ]),
    iconRight: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.oneOf(['Up', 'Right']),
    ]),
    /** Button's label (used only when `children` prop is absent) */
    label: PropTypes.string,
    children: PropTypes.node,

    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  static defaultProps = {
    as: 'button',

    variant: 'secondary',
    size: 'medium',
    inverted: false,
    fluid: false,
    disabled: undefined,

    id: undefined,
    className: undefined,
    href: undefined,
    role: undefined,
    target: undefined,
    type: undefined,
    title: undefined,
    tabIndex: undefined,

    iconLeft: undefined,
    iconRight: undefined,
    label: undefined,
    children: undefined,

    onClick: undefined,
    onMouseDown: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    onMouseMove: undefined,
    onMouseOut: undefined,
    onMouseOver: undefined,
    onMouseUp: undefined,
    onKeyDown: undefined,
    onKeyPress: undefined,
    onKeyUp: undefined,
  };

  render() {
    const {
      as,

      variant,
      size,
      inverted,
      fluid,
      disabled,

      id,
      className,
      href,
      role,
      target,
      type,
      title,
      tabIndex,

      iconLeft,
      iconRight,
      label,
      children,

      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      onKeyDown,
      onKeyPress,
      onKeyUp,
    } = this.props;

    const buttonProps = {
      disabled,
      href,
      role,
      target,
      type: type !== undefined ? type : as === 'button' ? 'button' : undefined,
      title,
      tabIndex,
      id,
      className: classNames('Button', className, {
        [`Button--variant--${variant}`]: true,
        [`Button--size--${size}`]: true,
        [`Button--inverted`]: inverted,
        [`Button--fluid`]: fluid,
      }),
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      onKeyDown,
      onKeyPress,
      onKeyUp,
    };

    const buttonChildren = children || (
      <React.Fragment>
        {iconLeft && renderIcon(iconLeft, { align: 'left' })}
        {label && <span className="Button__label">{label}</span>}
        {iconRight && renderIcon(iconRight, { align: 'right' })}
      </React.Fragment>
    );

    return React.createElement(as, buttonProps, buttonChildren);
  }
}

Button.Group = ButtonGroup;

export default Button;
