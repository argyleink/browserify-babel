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

module.exports = {
  getSome() {
    console.log('Got Some');
    return this;
  },
  crap,
  cleanupArray,
  name: () => scopedVar
}