var double = function(num) {
  return num * 2;
};

var Person = function() {
  function Person(givenName, surname) {
    this.givenName = givenName;
    this.surname = surname;
  }

  Object.defineProperty(Person.prototype, "fullName", {
    get: function() {
      return "" + this.givenName + " " + this.surname + "";
    },

    enumerable: false
  });

  return Person;
}();

function multiply() {
  var x = (arguments[0] !== void 0 ? arguments[0] : 0);
  var y = (arguments[1] !== void 0 ? arguments[1] : 0);
  return x * y;
}
