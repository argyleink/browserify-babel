let sum       = require('./sum')
  , Module    = require('./module_1')
  , Module2   = require('./module_2')
;

console.log(sum(1,8, 200));



Module.getSome().crap({
  direction: 'left',
  length: '20m'
});

Module.cleanupArray();
console.log(Module.name());




Module2.getSome();