// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

import CustomContent from '../../CustomContent/CustomContent.component';
import IconFacebook from '../../Icon/Facebook.component';
import IconInstagram from '../../Icon/Instagram.component';
import IconTwitter from '../../Icon/Twitter.component';

export const OverviewSidebarSectionPropTypes = {
  headline: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['text']).isRequired,
        text: PropTypes.string.isRequired,
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['link']).isRequired,
        linkUrl: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['social-icons']).isRequired,
        facebookUrl: PropTypes.string,
        instagramUrl: PropTypes.string,
        twitterUrl: PropTypes.string,
      }),
    ]),
  }),

  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['inline-text']).isRequired,
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),

      PropTypes.shape({
        type: PropTypes.oneOf(['inline-link']).isRequired,
        label: PropTypes.string.isRequired,
        linkUrl: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
      }),

      PropTypes.shape({
        type: PropTypes.oneOf(['content']).isRequired,
        contentHTML: PropTypes.string.isRequired,
      }),

      PropTypes.shape({
        type: PropTypes.oneOf(['list']).isRequired,
        listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ]),
  ),
};

class OverviewSidebarSection extends React.PureComponent {
  static displayName = 'OverviewSidebarSection';

  static propTypes = OverviewSidebarSectionPropTypes;

  static defaultProps = {
    headline: undefined,
    items: [],
  };

  static renderSocialIcon({ Icon, url }) {
    return (
      <a href={url} className="OverviewSidebarSection__headline__social-link">
        <Icon id={Math.random().toString()} />
      </a>
    );
  }

  static renderHeadlineContent(content) {
    switch (content.type) {
      case 'text':
        return content.text;
      case 'link':
        return <a href={content.linkUrl}>{content.linkText}</a>;
      case 'social-icons':
        return (
          <div className="OverviewSidebarSection__headline__social-links">
            {content.facebookUrl &&
              OverviewSidebarSection.renderSocialIcon({
                Icon: IconFacebook,
                url: content.facebook,
              })}
            {content.instagramUrl &&
              OverviewSidebarSection.renderSocialIcon({
                Icon: IconInstagram,
                url: content.instagram,
              })}
            {content.twitterUrl &&
              OverviewSidebarSection.renderSocialIcon({
                Icon: IconTwitter,
                url: content.twitter,
              })}
          </div>
        );
      default:
        throw new TypeError(`Unknown headline.content.type: ${content.type}`);
    }
  }

  static renderItem(item, index) {
    if (item.type === 'inline-text') {
      return (
        <div
          className="OverviewSidebarSection__item OverviewSidebarSection__item--inline"
          key={index}
        >
          <div className="OverviewSidebarSection__item__label">
            {item.label}
          </div>
          <div className="OverviewSidebarSection__item__content">
            {item.text}
          </div>
        </div>
      );
    }

    if (item.type === 'inline-link') {
      return (
        <div
          className="OverviewSidebarSection__item OverviewSidebarSection__item--inline"
          key={index}
        >
          <div className="OverviewSidebarSection__item__label">
            {item.label}
          </div>
          <div className="OverviewSidebarSection__item__content">
            <a href={item.linkUrl}>{item.linkText}</a>
          </div>
        </div>
      );
    }

    if (item.type === 'content') {
      return (
        <div
          className="OverviewSidebarSection__item OverviewSidebarSection__item--block"
          key={index}
        >
          <CustomContent innerHTML={item.contentHTML} />
        </div>
      );
    }

    if (item.type === 'list') {
      return (
        <div
          className="OverviewSidebarSection__item OverviewSidebarSection__item--block"
          key={index}
        >
          <CustomContent>
            <ul>
              {item.listItems.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>{listItem}</li>
              ))}
            </ul>
          </CustomContent>
        </div>
      );
    }

    throw new TypeError(`Unknown items[].type: ${item.type}`);
  }

  render() {
    const { headline, items } = this.props;
    return (
      <div className="OverviewSidebarSection">
        {headline && (
          <div className="OverviewSidebarSection__headline">
            <div className="OverviewSidebarSection__headline__title">
              {headline.title}
            </div>
            {headline.content && (
              <div className="OverviewSidebarSection__headline__content">
                {OverviewSidebarSection.renderHeadlineContent(headline.content)}
              </div>
            )}
          </div>
        )}

        {items.length > 0 && (
          <div className="OverviewSidebarSection__items">
            {items.map((item, index) =>
              OverviewSidebarSection.renderItem(item, index),
            )}
          </div>
        )}
      </div>
    );
  }
}

export default OverviewSidebarSection;
