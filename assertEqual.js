const assertEqual = function(actual, expected) {
  // Compare two variables with if...else to output assertion
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

module.exports = assertEqual;
