# modify-event

[![npm version](https://img.shields.io/npm/v/modify-event.svg)](https://www.npmjs.com/package/modify-event)
[![Build Status](https://travis-ci.com/shinnn/modify-event.svg?branch=master)](https://travis-ci.com/shinnn/modify-event)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/modify-event.svg)](https://coveralls.io/github/shinnn/modify-event)

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

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install modify-event
```

## API

```javascript
const modifyEvent = require('modify-event');
```

### modifyEvent(*eventEmitter*, *eventName*, *modifier*)

*eventEmitter*: [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter)  
*eventName*: `string` `symbol` (event name)  
*modifier*: `Function`  
Return: `EventEmitter` (a reference to the first argument)

It changes the first argument of the event listeners for a given event, in response to the return value of the *modifier* function.

```javascript
const {EventEmitter} = require('events');
const modifyEvent = require('modify-event');

const emitter = new EventEmitter();
const eventName = Symbol('custom event name');

modifyEvent(emitter, eventName, val => `${val}b`);
modifyEvent(emitter, eventName, val => `${val}c`);

emitter
.on(eventName, listener)
.emit(eventName, 'a');

function listener(data) {
  data; //=> 'abc'
}
```

## License

Copyright (c) 2015 - 2019 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
