# broccoli-esnext

[![NPM version](https://badge.fury.io/js/broccoli-esnext.svg)](http://badge.fury.io/js/broccoli-esnext)
[![Build Status](https://travis-ci.org/shinnn/broccoli-esnext.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-esnext)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-esnext.svg)](https://david-dm.org/shinnn/broccoli-esnext)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-esnext/dev-status.svg)](https://david-dm.org/shinnn/broccoli-esnext#info=devDependencies)

JS.next to JS.today transpiler for [Broccoli](https://github.com/broccolijs/broccoli) with [esnext](https://github.com/square/esnext)

## Installation

Install with [npm](https://www.npmjs.org/). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save-dev broccoli-esnext
```

## Example

```javascript
var esNext = require('broccoli-esnext');
tree = esNext(tree, options);
```

## API

### esNext(tree, options)

[All esnext options](https://github.com/square/esnext/blob/cf0ecb617a95260191048e3b29227e0016dc427d/lib/index.js#L59-L94) are available except for source map.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
