# broccoli-esnext

[![NPM version](https://badge.fury.io/js/broccoli-esnext.svg)](https://www.npmjs.org/package/broccoli-esnext)
[![Build Status](https://travis-ci.org/shinnn/broccoli-esnext.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-esnext)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-esnext.svg)](https://david-dm.org/shinnn/broccoli-esnext)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-esnext/dev-status.svg)](https://david-dm.org/shinnn/broccoli-esnext#info=devDependencies)

JS.next-to-JS.today transpiler for [Broccoli](https://github.com/broccolijs/broccoli), using [esnext](https://github.com/esnext/esnext)

```javascript
var quote = (...elms) => elms.map(elm => `"${elm}"`);
quote('carrot', 'onion', 'potato');
```

↓

```javascript
var quote = function() {
  var $__arguments = arguments;
  var elms = [].slice.call($__arguments, 0);

  return elms.map(function(elm) {
    return "\"" + elm + "\"";
  });
};
quote('carrot', 'onion', 'potato');
```

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html).

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

[All esnext options](https://github.com/esnext/esnext#available) and `sourcemap` option (described below) are available.

#### options.sourcemap

Type: `Boolean`  
Default: `false`

Appends base64-encoded [sourcemap](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k) to output files.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
