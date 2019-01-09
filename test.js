'use strict';

const {EventEmitter} = require('events');

const modifyEvent = require('.');
const {test} = require('tape');

test('modifyEvent()', t => {
	const emitter = new EventEmitter();

	t.equal(
		modifyEvent(emitter, 'data', data => data * 2),
		emitter,
		'should return the modified EventEmitter.'
	);

	emitter
	.on('data', function(data) {
		t.equal(this, emitter, 'should call the listener in the same context as original\'s.');
		t.equal(data, 2, 'should modify the value of event.');
	})
	.emit('data', 1);

	emitter
	.on('anotherData', data => {
		t.equal(data, 1, 'should not modify the value of non-target events.');
	})
	.emit('anotherData', 1);

	t.equal(
		emitter.emit(Symbol('this event has no listeners'), 1),
		false,
		'should keep the return value of .emit() method.'
	);

	t.end();
});

test('Argument validation', t => {
	t.throws(
		() => modifyEvent(null, 'data', t.fail),
		/^TypeError.* must be an EventEmitter\./u,
		'should fail when the first argument is not an object.'
	);

	t.throws(
		() => modifyEvent({}, 'data', t.fail),
		/^TypeError.* must be an EventEmitter\./u,
		'should fail when the first argument is not an instance of EventEmitter.'
	);

	t.throws(
		() => modifyEvent(new EventEmitter(), ['1'], t.fail),
		/^TypeError.*\[ '1' \] is neither a string nor a symbol\. The second argument to modify-event must be an event name\./u,
		'should fail when the second argument is not a string.'
	);

	t.throws(
		() => modifyEvent(new EventEmitter(), 'data', 'foo'),
		/^TypeError.*'foo' is not a function\. The third argument to modify-event must be a function\./u,
		'should fail when the third argument is not a function.'
	);

	t.end();
});
