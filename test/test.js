'use strict';

var assert = require('assert');
var fs = require('fs');
var Q = require('q');

var readFile = Q.denodeify(fs.readFile);

describe('broccoli-esnext', function () {
  it('should transpile ES6 to ES5', function() {
    return Q.all([
      readFile('test/actual/es6-features.js'),
      readFile('test/expected/es6-features.js')
    ]).spread(function(actual, expected) {
      assert.strictEqual(actual.toString(), expected.toString());
    });
  });
});
