'use strict';

var esnext = require('./');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var stripDebug = require('broccoli-strip-debug');
var uglify = require('broccoli-uglify-js');

module.exports = mergeTrees([
  esnext('test/fixture/es6-features'),
  esnext('test/fixture/simple', {
    includeRuntime: true,
    sourcemap: true
  }),
  uglify(
    new Funnel(
      esnext(stripDebug(esnext(stripDebug('test/fixture/simple')))),
      {destDir: 'chained'}
    )
  )
], {overwrite: true});
