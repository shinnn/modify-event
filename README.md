# modify-event

[![NPM version](https://img.shields.io/npm/v/modify-event.svg)](https://www.npmjs.com/package/modify-event)
[![Build Status](https://travis-ci.org/shinnn/modify-event.svg?branch=master)](https://travis-ci.org/shinnn/modify-event)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/modify-event.svg)](https://coveralls.io/r/shinnn/modify-event)
[![devDependency Status](https://david-dm.org/shinnn/modify-event/dev-status.svg)](https://david-dm.org/shinnn/modify-event#info=devDependencies)

Modify the value of the specific object's [event](https://nodejs.org/api/events.html)

```javascript
const {EventEmitter} = require('events');
const modifyEvent = require('modify-event');

const emitter = new EventEmitter();

modifyEvent(emitter, 'foo', val => val * 2);

emitter.on('foo', data => {
  data; //=> 2
});

emitter.emit('foo', 1);
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install modify-event
```

## API

```javascript
const modifyEvent = require('modify-event');
```

### modifyEvent(*eventEmitter*, *eventName*, *modifier*)

*eventEmitter*: `Object` (an instance of [`EventEmitter`](https://nodejs.org/api/events.html#events_class_events_eventemitter) or its inheritance e.g. [`Stream`](https://nodejs.org/api/stream.html#stream_stream))  
*eventName*: `String` (event name)  
*modifier*: `Function`  
Return: `Object` (Same as the first argument)

It changes the first argument of the event listeners for a given event, in response to the return value of the *modifier* function.

```javascript
const {EventEmitter} = require('events');
const modifyEvent = require('modify-event');

const emitter = new EventEmitter();

modifyEvent(emitter, 'data', val => val + 'b');
modifyEvent(emitter, 'data', val => val + 'c');

emitter
.on('data', listener)
.emit('data', 'a');

function listener(data) {
  data; //=> 'abc'
}
```

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
