(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var sum = require('./sum'),
    Module = require('./module_1'),
    Module2 = require('./module_2');

console.log(sum(1, 8, 200));

Module.getSome().crap({
  direction: 'left',
  length: '20m'
});

Module.cleanupArray();
console.log(Module.name());

Module2.getSome();

},{"./module_1":2,"./module_2":3,"./sum":4}],2:[function(require,module,exports){
'use strict';

var scopedVar = 'New Module',
    scopedArray = [5, 2, 3, 9, 12, 1];

function crap() {
  var options = arguments[0] === undefined ? { direction: 'right', length: '10m' } : arguments[0];
  var direction = options.direction;
  var length = options.length;

  console.log(direction);
}

function cleanupArray() {
  scopedArray.sort(function (a, b) {
    return a - b;
  });
  console.log(scopedArray);
}

module.exports = {
  getSome: function getSome() {
    console.log('Got Some');
    return this;
  },
  crap: crap,
  cleanupArray: cleanupArray,
  name: function name() {
    return scopedVar;
  }
};

},{}],3:[function(require,module,exports){
'use strict';

var Module = require('./module_1');

// Extend Module 1, overwrite a method
var Module2 = {
  __proto__: Module,
  getSome: function getSome() {
    console.log('Got Hella');
    return this;
  }
};

module.exports = Module2;

},{"./module_1":2}],4:[function(require,module,exports){
"use strict";

module.exports = function (a) {
  for (var _len = arguments.length, b = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    b[_key - 1] = arguments[_key];
  }

  b.forEach(function (num) {
    return a += num;
  });
  return a;
};

},{}]},{},[1,2,3,4]);
