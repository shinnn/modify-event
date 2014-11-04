'use strict';

var path = require('path');

var compileEsnext = require('esnext').compile;
var Filter = require('broccoli-filter');
var inlineSourceMapComment = require('inline-source-map-comment');

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

EsnextFilter.prototype.read = function(readTree) {
  var self = this;
  var args = arguments;

  if (self.options.sourcemap && self.options.sourceMapName === undefined) {
    self.options.sourceMapName = '_';
  }
  
  return readTree(this.inputTree).then(function(srcDir) {
    if (self.options.sourceFileName !== undefined) {
      self.options.sourceFileName = path.resolve(srcDir, self.options.sourceFileName);
    }
    return Filter.prototype.read.apply(self, args);
  });
};

EsnextFilter.prototype.processString = function(str) {
  var result = compileEsnext(str, this.options);

  if (result.map) {
    return result.code + '\n' + inlineSourceMapComment(result.map) + '\n';
  } else {
    return result.code;
  }
};

module.exports = EsnextFilter;
