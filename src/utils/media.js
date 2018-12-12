import { gridDimensions } from '../config/config';
import { window } from './browser';

function getCurrentScreenSize() {
  return (
    Object.keys(gridDimensions).find(size => {
      const { minScreenWidth, maxScreenWidth } = gridDimensions[size];
      return (
        window.innerWidth >= minScreenWidth &&
        window.innerWidth <= maxScreenWidth
      );
    }) || 'xs'
  );
}

function getCurrentScreenGridDimensions() {
  return gridDimensions[getCurrentScreenSize()];
}

export { gridDimensions, getCurrentScreenSize, getCurrentScreenGridDimensions };
