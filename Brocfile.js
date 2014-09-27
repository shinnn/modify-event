'use strict';

var mergeTrees = require('broccoli-merge-trees');
var esnext = require('./');

module.exports = mergeTrees([
  esnext('test/fixture/es6-features'),
  esnext('test/fixture/sourcemap', {
    includeRuntime: true,
    sourcemap: true
  })
], {overwrite: true});
