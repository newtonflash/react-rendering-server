// This file is maintained by storybook, not to be modified
import PropTypes from 'prop-types';
import React from 'react';

import OverviewSidebarSection, {
  OverviewSidebarSectionPropTypes,
} from './OverviewSidebarSection/OverviewSidebarSection.component';

export { OverviewSidebarSectionPropTypes };

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/47251864/Overview+Sidebar+WIP)
 */
class OverviewSidebar extends React.PureComponent {
  static displayName = 'OverviewSidebar';

  static propTypes = {
    /** List of sections, which each of them being a following object:
     * ```
     * {
     *   headline?: {
     *     title: string,
     *     content?:
     *       { type: 'text', text: string }
     *       | { type: 'link', linkUrl: string, linkText: string }
     *       | { type: 'social-icons', facebookUrl?: string, instagramUrl?: string, twitterUrl?: string }
     *   },
     *   items?: Array<
     *     { type: 'inline-text', label: string, text: string }
     *     | { type: 'inline-link', label: string, linkUrl: string, linkText: string }
     *     | { type: 'content', contentHTML: string }
     *   }>
     * }
     * ```
     */
    sections: PropTypes.arrayOf(
      PropTypes.exact(OverviewSidebarSectionPropTypes),
    ).isRequired,
  };

  render() {
    const { sections } = this.props;
    return (
      <div className="OverviewSidebar">
        {sections.map((section, index) => (
          <div className="OverviewSidebar__section" key={index}>
            <OverviewSidebarSection {...section} />
          </div>
        ))}
      </div>
    );
  }
}

export default OverviewSidebar;
