/* eslint-disable import/prefer-default-export */
import { window } from './browser';

export const getClosestScrollContainer = element => {
  if (!element) {
    return undefined;
  }

  let parent = element.parentElement;
  while (parent) {
    const { overflow } = window.getComputedStyle(parent);
    if (overflow.split(' ').every(o => o === 'auto' || o === 'scroll')) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return window;
};
