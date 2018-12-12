const EXTENSIONS = {
  '16x9': {
    high: '.image.1920.1080.high.jpg',
  },
  '4x3': {
    high: '.image.1200.1200.high.jpg', // did not find 4x3 yet
  },
  '5x2': {
    high: '.image.1920.1080.high.jpg', // did not find 5x2 yet
  },
};

const resolveExtension = (ratio, quality) => EXTENSIONS[ratio][quality];

const imageUrl = ({ ratio, quality, url }) => {
  const dimensions = resolveExtension(ratio, quality);
  return `${url}${dimensions}`;
};

export default imageUrl;
