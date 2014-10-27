'use strict';

var path = require('path');

var compileEsnext = require('esnext').compile;
var Filter = require('broccoli-filter');
var inlineSourceMapComment = require('inline-source-map-comment');
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
  var inputDir;
  if (typeof this.inputTree === 'string') {
    inputDir = this.inputTree;
  } else {
    inputDir = this.inputTree.inputTree;
  }

  var options = xtend(this.options, {
    sourceFileName: path.join(inputDir, relativePath)
  });

  if (options.sourcemap) {
    options.sourceMapName = '_';
  }

  var result = compileEsnext(str, options);

  if (result.map) {
    return result.code + '\n' + inlineSourceMapComment(result.map) + '\n';
  } else {
    return result.code;
  }
};

module.exports = EsnextFilter;
