/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// PostCSS filters
const postcssNested = require('postcss-nested');

// CSSNext is our PostCSS plugin of choice, that will allow us to use 'future'
// stylesheet syntax like it's available today.
const cssnext = require('postcss-cssnext');

// CSSNano will optimise our stylesheet code
const cssnano = require('cssnano');

const rtlcss = require('rtlcss');

module.exports = {
  plugins: [
    postcssNested(),
    cssnext(),
    cssnano(),
    rtlcss(),
  ],
};
