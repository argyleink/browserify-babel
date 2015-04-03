let Module = require('./module_1');

// Extend Module 1, overwrite a method
let Module2 = {
  __proto__: Module,
  getSome() {
    console.log('Got Hella');
    return this;
  }
}

module.exports = Module2;