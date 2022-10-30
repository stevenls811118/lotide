const eqObjects = require('./eqObjects');
const inspect = require('util').inspect; // Import inspect to see detail of objects

const assertObjectsEqual = function(actual, expected) {
  // Compare two objects with eqObjects function return true of false for assertion
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;