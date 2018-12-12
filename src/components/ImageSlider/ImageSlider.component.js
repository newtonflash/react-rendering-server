// This file is maintained by storybook, not to be modified
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { window } from '../../utils/browser';
import ResponsiveDiv from '../ResponsiveDiv.component';

class ImageSlider extends React.PureComponent {
  static propTypes = {
    variant: PropTypes.oneOf(['default', 'push-bars-top']),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
    ).isRequired,
    autoPlay: PropTypes.bool,
    autoPlaySpeed: PropTypes.number,
    animationSpeed: PropTypes.number,
    onSlideWillChange: PropTypes.func,
    onSlideDidChange: PropTypes.func,
    onSlideManualChange: PropTypes.func,
  };

  static defaultProps = {
    variant: 'default',
    autoPlay: true,
    autoPlaySpeed: 5000,
    animationSpeed: 500,
    onSlideWillChange: undefined,
    onSlideDidChange: undefined,
    onSlideManualChange: undefined,
  };

  state = {
    initialAutoPlay: this.props.autoPlay, // eslint-disable-line react/destructuring-assignment
    activeSlideIndex: 0,
    initialSlide: 0,
  };

  barsContainerRef = React.createRef();

  sliderRef = React.createRef();

  rafIds = [];

  componentDidMount() {
    this.stopBarAnimation();
    this.rafIds.push(
      requestAnimationFrame(() => {
        this.startBarAnimation();
      }),
    );

    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate(prevProps) {
    const { autoPlay } = this.props;
    if (prevProps.autoPlay !== autoPlay && this.sliderRef.current) {
      if (this.sliderRef.current) {
        if (autoPlay) {
          this.sliderRef.current.slickPlay();
        } else {
          this.sliderRef.current.slickPause();
        }
      }

      this.stopBarAnimation();
      this.startBarAnimation();
    }
  }

  componentWillUnmount() {
    this.rafIds.forEach(id => cancelAnimationFrame(id));
    this.rafIds.length = 0;

    window.removeEventListener('resize', this.handleWindowResize);
  }

  // eslint-disable-next-line react/destructuring-assignment
  startBarAnimation(slideIndex = this.state.activeSlideIndex) {
    if (!this.barsContainerRef.current) {
      return;
    }
    const { autoPlay, autoPlaySpeed } = this.props;
    const fillEl = this.barsContainerRef.current.children[
      slideIndex
    ].querySelector('.ImageSlider__bar__fill');
    fillEl.style.maxWidth = '0%';
    fillEl.style.opacity = '1';
    fillEl.style.transition = '';
    this.rafIds.push(
      requestAnimationFrame(() => {
        fillEl.style.maxWidth = '100%';
        fillEl.style.transition = `max-width ${
          autoPlay ? autoPlaySpeed : 0
        }ms linear`;
      }),
    );
  }

  stopBarAnimation() {
    const { animationSpeed } = this.props;
    if (!this.barsContainerRef.current) {
      return;
    }
    const fillEls = this.barsContainerRef.current.querySelectorAll(
      '.ImageSlider__bar__fill',
    );
    Array.prototype.forEach.call(fillEls, fillEl => {
      fillEl.style.opacity = '0';
      fillEl.style.maxWidth = '101%';
      fillEl.style.transition = `max-width 50000s linear, opacity ${animationSpeed}ms ease-in-out`;
    });
  }

  handleWindowResize = () => {
    this.setState(state => ({
      initialSlide: state.activeSlideIndex,
    }));

    this.stopBarAnimation();
    this.rafIds.push(
      requestAnimationFrame(() => {
        this.startBarAnimation();
      }),
    );
  };

  handleSlideWillChange = (prevIndex, nextIndex) => {
    const { onSlideWillChange } = this.props;

    this.stopBarAnimation();
    this.startBarAnimation(nextIndex);
    this.setState({ activeSlideIndex: nextIndex });

    if (onSlideWillChange) {
      onSlideWillChange(nextIndex);
    }
  };

  handleSlideDidChange = index => {
    const { onSlideDidChange } = this.props;
    if (onSlideDidChange) {
      onSlideDidChange(index);
    }
  };

  handleBarButtonClick = index => {
    const { onSlideManualChange } = this.props;
    if (!this.sliderRef.current) {
      return;
    }
    this.sliderRef.current.slickGoTo(index);
    onSlideManualChange(index);
  };

  render() {
    const {
      variant,
      images,
      autoPlaySpeed,
      animationSpeed,
      onSlideManualChange,
    } = this.props;
    const { initialAutoPlay, initialSlide, activeSlideIndex } = this.state;

    return (
      <div
        className={classNames('ImageSlider', {
          [`ImageSlider--variant--${variant}`]: true,
        })}
      >
        <ResponsiveDiv screen="maxSm">
          <Slider
            ref={this.sliderRef}
            initialSlide={initialSlide}
            infinite
            swipe
            draggable
            arrows={false}
            dots={false}
            autoplay={initialAutoPlay}
            autoplaySpeed={autoPlaySpeed}
            speed={animationSpeed}
            pauseOnDotsHover={false}
            pauseOnFocus={false}
            pauseOnHover={false}
            beforeChange={this.handleSlideWillChange}
            afterChange={this.handleSlideDidChange}
            onSwipe={onSlideManualChange || null}
          >
            {images.map(image => (
              <img key={image.url} src={image.url} alt={image.alt || ''} />
            ))}
          </Slider>
        </ResponsiveDiv>

        <ResponsiveDiv screen="minMd">
          <Slider
            ref={this.sliderRef}
            initialSlide={initialSlide}
            infinite
            arrows={false}
            fade
            swipe={false}
            dots={false}
            autoplay={initialAutoPlay}
            autoplaySpeed={autoPlaySpeed}
            speed={animationSpeed}
            pauseOnDotsHover={false}
            pauseOnFocus={false}
            pauseOnHover={false}
            beforeChange={this.handleSlideWillChange}
            afterChange={this.handleSlideDidChange}
            onSwipe={onSlideManualChange || null}
          >
            {images.map(image => (
              <img key={image.url} src={image.url} alt={image.alt || ''} />
            ))}
          </Slider>
        </ResponsiveDiv>

        {images.length > 1 && (
          <ul className="ImageSlider__bars" ref={this.barsContainerRef}>
            {images.map((image, index) => (
              <li
                key={index}
                className={
                  index === activeSlideIndex ? 'slick-active' : undefined
                }
              >
                <button
                  type="button"
                  className="ImageSlider__bar"
                  tabIndex="0"
                  onClick={this.handleBarButtonClick.bind(this, index)}
                  // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
                  role="presentation"
                >
                  <span className="screen-reader-text">
                    {image.alt || `Slide number ${index + 1}`}
                  </span>
                  <div className="ImageSlider__bar__fill" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ImageSlider;
