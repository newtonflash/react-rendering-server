/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */

// Establish the root object, `window` in the browser, or `global` on the server.
let root = typeof self == 'object' && self.Object == Object && self;
root = root || (typeof global == 'object' && global.Object == Object && global);

const { window, document } = root;

export { window, document };
