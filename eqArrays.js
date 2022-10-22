const eqArrays = function(arrayOne, arrayTwo) {
  let boolean = true;
  if (arrayOne.length === arrayTwo.length) {
    for (let i in arrayOne) {
      if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
        boolean = eqArrays(arrayOne[i], arrayTwo[i]);        
      } else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return boolean;
};

module.exports = eqArrays;