/* jshint unused: false */

var $__getIteratorRange = function(iterator, index, begin, len) {
  if (index > begin) {
    throw new RangeError();
  }

  if (typeof len === "undefined") {
    len = Infinity;
  }

  var range = [], end = begin + len;

  while (index < end) {
    var next = iterator.next();

    if (next.done) {
      break;
    }

    if (index >= begin) {
      range.push(next.value);
    }

    index++;
  }

  return {
    range: range,
    index: index
  };
};

var $__getIterator = function(iterable) {
  var sym = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  if (typeof iterable[sym] === "function") {
    return iterable[sym]();
  } else if (typeof iterable === "object" || typeof iterable === "function") {
    return $__getArrayIterator(iterable);
  } else {
    throw new TypeError();
  }
};

var $__getArrayIterator = function(array) {
  var index = 0;

  return {
    next: function() {
      if (index < array.length) {
        return {
          done: false,
          value: array[index++]
        };
      } else {
        return {
          done: true,
          value: void 0
        };
      }
    }
  };
};

var gen = regeneratorRuntime.mark(function gen(i) {
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
    case 0:
      if (!true) {
        context$1$0.next = 5;
        break;
      }

      context$1$0.next = 3;
      return i++;
    case 3:
      context$1$0.next = 0;
      break;
    case 5:
    case "end":
      return context$1$0.stop();
    }
  }, gen, this);
});

var $__Object$defineProperties = Object.defineProperties;
'use strict';

var double = function(num) {
  return num * 2;
};

var var$0 = [1, 2, 3],
    iterator$0 = $__getIterator(var$0),
    iteratorValue$0 = {
      index: 0
    },
    one = (iteratorValue$0 = $__getIteratorRange(iterator$0, iteratorValue$0.index, 0, 1), iteratorValue$0.range[0]),
    three = (iteratorValue$0 = $__getIteratorRange(iterator$0, iteratorValue$0.index, 2, 1), iteratorValue$0.range[0]);

var Person = function() {
  "use strict";

  function Person(givenName, surname) {
    this.givenName = givenName;
    this.surname = surname;
  }

  $__Object$defineProperties(Person.prototype, {
    fullName: {
      get: function() {
        return "" + this.givenName + " " + this.surname + "";
      },

      enumerable: true,
      configurable: true
    }
  });

  $__Object$defineProperties(Person, {});
  return Person;
}();

function multiply() {
  var x = (arguments[0] !== void 0 ? arguments[0] : 0);
  var y = (arguments[1] !== void 0 ? arguments[1] : 0);
  return x * y;
}
