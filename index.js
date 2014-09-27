'use strict';

var path = require('path');

var Filter = require('broccoli-filter');
var compileEsnext = require('esnext').compile;
var xtend = require('xtend');

function EsnextFilter(inputTree, options) {
  if (!(this instanceof EsnextFilter)) {
    return new EsnextFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

EsnextFilter.prototype = Object.create(Filter.prototype);
EsnextFilter.prototype.constructor = EsnextFilter;

EsnextFilter.prototype.extensions = ['js'];
EsnextFilter.prototype.targetExtension = 'js';

EsnextFilter.prototype.processString = function(str, relativePath) {
  var options = xtend(this.options, {
    sourceFileName: path.join(this.inputTree, relativePath)
  });

  if (options.sourcemap) {
    options.sourceMapName = '_';
  }

  var result = compileEsnext(str, options);

  if (result.map) {
    var map = JSON.stringify(result.map);
    return result.code +
           '\n//# sourceMappingURL=data:application/json;base64,' +
           new Buffer(map).toString('base64');
  } else {
    return result.code;
  }
};

module.exports = EsnextFilter;
