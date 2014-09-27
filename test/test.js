'use strict';

var readFiles = require('read-files-promise');
var test = require('tape');

test('broccoli-esnext', function(t) {
  t.plan(2);

  readFiles([
    'test/actual/es6-features.js',
    'test/expected/es6-features.js'
  ])
  .then(function(bufs) {
    t.strictEqual(
      bufs[0].toString(),
      bufs[1].toString(),
      'should transpile ES-next script using esnext.'
    );
  });

  readFiles(['test/actual/sourcemap.js'])
  .then(function(bufs) {
    t.ok(
      /\/\/# sourceMappingURL/.test(bufs[0].toString()),
      'should append inline sourcemap.'
    );
  });
});
