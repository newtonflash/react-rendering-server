// This file is maintained by storybook, not to be modified
import React from 'react';
import PropTypes from 'prop-types';

import OverviewSidebar, {
  OverviewSidebarSectionPropTypes,
} from '../OverviewSidebar/OverviewSidebar.component';
import DetailPageHeaderSection from '../DetailPageHeaderSection/DetailPageHeaderSection.component';
import RoomOverviewMain from './RoomOverviewHeaderMain/RoomOverviewHeaderMain.component';
import ImageSlider from '../ImageSlider/ImageSlider.component';

/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/17301616/Room+Overview+Header)
 */
class RoomOverviewHeaderSection extends React.PureComponent {
  static propTypes = {
    /** `DetailPageHeaderSection` component props. */
    header: PropTypes.shape({
      subtitle: PropTypes.string,
      title: PropTypes.string,
      primaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        onClick: PropTypes.func,
      }),
      secondaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        onClick: PropTypes.func,
      }),
    }),
    heroImages: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
    ),
    /** `OverviewSidebar` component `sections` prop. */
    sidebarSections: PropTypes.arrayOf(
      PropTypes.exact(OverviewSidebarSectionPropTypes),
    ),
    main: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      primaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        onClick: PropTypes.func,
      }),
      tertiaryAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        onClick: PropTypes.func,
      }),
    }),
  };

  static defaultProps = {
    header: {
      title: 'RoomOverviewHeaderSection',
    },
    sidebarSections: [],
    heroImages: [],
    main: {},
  };

  render() {
    const { sidebarSections, header, main, heroImages } = this.props;

    return (
      <div className="RoomOverviewHeaderSection">
        <div className="RoomOverviewHeaderSection__header">
          <DetailPageHeaderSection {...header} />
        </div>

        {heroImages.length > 0 && (
          <div className="RoomOverviewHeaderSection__slider">
            <div className="RoomOverviewHeaderSection__slider__inner">
              <ImageSlider images={heroImages} variant="push-bars-top" />
            </div>
          </div>
        )}

        <div className="RoomOverviewHeaderSection__main">
          <div className="RoomOverviewHeaderSection__content">
            <RoomOverviewMain {...main} />
          </div>
          {sidebarSections.length > 0 && (
            <div className="RoomOverviewHeaderSection__aside">
              <OverviewSidebar sections={sidebarSections} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RoomOverviewHeaderSection;
