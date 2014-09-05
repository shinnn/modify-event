# broccoli-esnext

[![NPM version](https://badge.fury.io/js/broccoli-esnext.svg)](http://badge.fury.io/js/broccoli-esnext)
[![Build Status](https://travis-ci.org/shinnn/broccoli-esnext.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-esnext)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-esnext.svg)](https://david-dm.org/shinnn/broccoli-esnext)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-esnext/dev-status.svg)](https://david-dm.org/shinnn/broccoli-esnext#info=devDependencies)

JS.next-to-JS.today transpiler for [Broccoli](https://github.com/broccolijs/broccoli), using [esnext](https://github.com/square/esnext)

```javascript
var quote = (single = false, ...elms) => elms.map(elm => single? `'${elm}'`: `"${elm}"`);

quote(true, ...['carrot', 'onion', 'potato']);
```

↓

```javascript
var $__Array$prototype$slice = Array.prototype.slice;

var quote = function() {
  var single = (arguments[0] !== void 0 ? arguments[0] : false);
  var elms = [].slice.call(arguments, 1);

  return elms.map(function(elm) {
    return single? "'" + elm + "'": "\"" + elm + "\"";
  });
};

quote.apply(null, [true].concat($__Array$prototype$slice.call(['carrot', 'onion', 'potato'])));
```

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html). (Make sure you have installed [Node](http://nodejs.org/))

```
npm i --save-dev broccoli-esnext
```

## Usage

```javascript
var esnext = require('broccoli-esnext');
tree = esnext(tree, options);
```

## API

### esnext(tree, options)

[All esnext options](https://github.com/esnext/esnext/blob/50b89f461cc7ca93484928540ebbf3e6ba58f302/lib/index.js#L61-L100) are available except for source map.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
