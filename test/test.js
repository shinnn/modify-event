'use strict';

var readFile = require('fs-readfile-promise');
var readFiles = require('read-files-promise');
var test = require('tape');

test('broccoli-esnext', function(t) {
  t.plan(3);

  readFiles([
    'test/actual/es6-features.js',
    'test/expected/es6-features.js'
  ], 'utf-8')
  .then(function(outputs) {
    t.strictEqual(
      outputs[0], outputs[1],
      'should transpile ES-next script using esnext.'
    );
  });

  readFile('test/actual/simple.js', 'utf-8')
  .then(function(output) {
    t.ok(
      /\/\/# sourceMappingURL/.test(output),
      'should append inline sourcemap.'
    );
  });

  readFile('test/actual/chained/simple.js', 'utf-8')
  .then(function(output) {
    t.strictEqual(
      output, 'var n=1;void 0;',
      'should accept a tree object, instead of a path.'
    );
  });
});
