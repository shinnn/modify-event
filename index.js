'use strict';

var Filter = require('broccoli-filter');
var compileEsNext = require('esnext').compile;

function EsNextFilter(inputTree, options) {
  if (!(this instanceof EsNextFilter)) {
    return new EsNextFilter(inputTree, options);
  }
  
  this.inputTree = inputTree;
  this.options = options || {};
}

EsNextFilter.prototype = Object.create(Filter.prototype);
EsNextFilter.prototype.constructor = EsNextFilter;

EsNextFilter.prototype.extensions = ['js'];
EsNextFilter.prototype.targetExtension = 'js';

EsNextFilter.prototype.processString = function(str) {
  return compileEsNext(str, this.options).code;
};

module.exports = EsNextFilter;
