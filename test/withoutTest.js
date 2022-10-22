const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

/* const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [10, 14, 9, 7, 9, 14, 20];
console.log(without(numbers, [9, 14, 7, 20])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(numbers, [10, 14, 9, 7, 9, 14, 20]); */

const num = ["1", "1", "1", "2", "3", "1" , "1"];
console.log(without(num, ["1", 2, "3"]));