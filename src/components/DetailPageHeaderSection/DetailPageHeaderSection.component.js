// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button.component';
import ResponsiveDiv from '../ResponsiveDiv.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/47153546/Detail+Page+Header)
 *
 * ## To do
 *
 * - status flag (the green circle icon next to status text)
 */
class DetailPageHeaderSection extends React.PureComponent {
  static propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    primaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
    secondaryAction: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      onClick: PropTypes.func,
      onKeyPress: PropTypes.func,
    }),
  };

  static defaultProps = {
    subtitle: undefined,
    title: undefined,
    primaryAction: undefined,
    secondaryAction: undefined,
  };

  render() {
    const { subtitle, title, primaryAction, secondaryAction } = this.props;
    return (
      <div className="DetailPageHeaderSection">
        <div className="DetailPageHeaderSection__inner">
          {subtitle && (
            <div className="DetailPageHeaderSection__subtitle">{subtitle}</div>
          )}
          {title && <h1 className="DetailPageHeaderSection__title">{title}</h1>}
          {(primaryAction || secondaryAction) && (
            <ResponsiveDiv screen="minMd">
              {minMd => (
                <div className="DetailPageHeaderSection__actions">
                  {primaryAction && (
                    <div className="DetailPageHeaderSection__action">
                      <Button
                        as="a"
                        href={primaryAction.href}
                        label={primaryAction.label}
                        variant="primary"
                        size={minMd ? 'medium-padded' : 'small'}
                        fluid
                      />
                    </div>
                  )}
                  {secondaryAction && (
                    <div className="DetailPageHeaderSection__action">
                      <Button
                        as="a"
                        href={secondaryAction.href}
                        label={secondaryAction.label}
                        variant="secondary"
                        size={minMd ? 'medium-padded' : 'small'}
                        fluid
                      />
                    </div>
                  )}
                </div>
              )}
            </ResponsiveDiv>
          )}
        </div>
      </div>
    );
  }
}

export default DetailPageHeaderSection;
