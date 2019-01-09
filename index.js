'use strict';

const util = require('util');

module.exports = function modifyEvent(eventEmitter, targetEventName, fn) {
	if (!eventEmitter || typeof eventEmitter.emit !== 'function') {
		throw new TypeError(`${
			util.inspect(eventEmitter)
		} doesn't have "emit" method. The first argument to modify-event must be an EventEmitter.`);
	}

	const targetEventNameType = typeof targetEventName;

	if (targetEventNameType !== 'string' && targetEventNameType !== 'symbol') {
		throw new TypeError(`${
			util.inspect(targetEventName)
		} is neither a string nor a symbol. The second argument to modify-event must be an event name.`);
	}

	if (typeof fn !== 'function') {
		throw new TypeError(`${
			util.inspect(fn)
		} is not a function. The third argument to modify-event must be a function.`);
	}

	const originalEmit = eventEmitter.emit.bind(eventEmitter);

	eventEmitter.emit = function modifiedEmit(eventName, val) {
		if (eventName === targetEventName) {
			val = fn(val);
		}

		return originalEmit(eventName, val);
	};

	return eventEmitter;
};
