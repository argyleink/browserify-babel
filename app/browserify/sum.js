module.exports = (a, ...b) => {
  b.forEach( (num) => a+=num )
  return a;
}