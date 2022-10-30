const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
  // use eqArrays function to compare two arrays to return true or false
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log("✅✅✅Assertion Passed: ", arrayOne, " === ", arrayTwo);
  } else {
    console.log("🛑🛑🛑Assertion Failed: ", arrayOne, " !== ", arrayTwo);
  }
};

module.exports = assertArraysEqual;
