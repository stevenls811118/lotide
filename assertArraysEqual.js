const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
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
  if (boolean) {
    console.log("✅✅✅Assertion Passed: ", arrayOne, " === ", arrayTwo);
  } else {
    console.log("🛑🛑🛑Assertion Failed: ", arrayOne, " !== ", arrayTwo);
  }
};

module.exports = assertArraysEqual;
