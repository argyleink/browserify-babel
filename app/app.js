let sum = require('./sum');
console.log(sum(1,8, 200));

let Module = (() => {
  
  let scopedVar   = 'New Module'
    , scopedArray = [5, 2, 3, 9, 12, 1];
  
  function crap(options = { direction: 'right', length: '10m' }) {
    let { 
      direction
    , length 
    } = options;
    
    console.log(direction);
  }
  
  function cleanupArray() {
    scopedArray.sort( (a,b) => a - b );
    console.log(scopedArray);
  }
  
  return {
    getSome() {
      console.log('Got Some');
      return this;
    },
    crap,
    cleanupArray,
    name: () => scopedVar
  }
  
})();

Module.getSome().crap({
  direction: 'left',
  length: '20m'
});

Module.cleanupArray();
console.log(Module.name());

// Extend Module 1, overwrite a method
let Module2 = {
  __proto__: Module,
  getSome() {
    console.log('Got Hella');
    return this;
  }
}

Module2.getSome();