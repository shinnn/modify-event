'use strong';

const {EventEmitter} = require('events');

const modifyEvent = require('.');
const {test} = require('tape');

test('modifyEvent()', t => {
  t.plan(10);

  t.equal(modifyEvent.name, 'modifyEvent', 'should have a function name.');

  const emitter = new EventEmitter();

  t.strictEqual(
    modifyEvent(emitter, 'data', data => data * 2),
    emitter,
    'should return the modified EventEmitter.'
  );

  emitter
  .on('data', function(data) {
    t.strictEqual(this, emitter, 'should call the listener in the same context as original\'s.');
    t.strictEqual(data, 2, 'should modify the value of event.');
  })
  .emit('data', 1);

  emitter
  .on('data2', data => {
    t.strictEqual(data, 1, 'should not modify the value of non-target events.');
  })
  .emit('data2', 1);

  t.strictEqual(
    emitter.emit('data3', 1),
    false,
    'should keep the return value of .emit() method.'
  );

  t.throws(
    () => modifyEvent(null, 'data', t.fail),
    /TypeError.* must be an instance of EventEmitter or its inheritance\./,
    'should throw a type error when the first argument is not an object.'
  );

  t.throws(
    () => modifyEvent({}, 'data', t.fail),
    /TypeError.* must be an instance of EventEmitter or its inheritance\./,
    'should throw a type error when the first argument is not an instance of EventEmitter.'
  );

  t.throws(
    () => modifyEvent(emitter, 123, t.fail),
    /TypeError.* is not a string\. The second argument to modify-event must be an event name\./,
    'should throw a type error when the second argument is not a string.'
  );

  t.throws(
    () => modifyEvent(emitter, 'data', 'foo'),
    /TypeError.*foo is not a function\. The third argument to modify-event must be a function\./,
    'should throw a type error when the third argument is not a function.'
  );
});
