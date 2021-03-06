require('@babel/register')({
    presets: [ '@babel/env' ],
    extensions: [".es6", ".es", ".jsx", ".js"],
    cache: true
})

// Import the rest of our application.
module.exports = require('./core/server/server.js');