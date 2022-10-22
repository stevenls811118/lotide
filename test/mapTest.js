const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

// Test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length);
console.log(results2);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word.replace(/a/g,'@').replace(/o/g, 0));
console.log(results3);
assertArraysEqual(results3, ["gr0und", "c0ntr0l", "t0", "m@j0r", "t0m"]);

const results4 = map(words, word => word.toUpperCase());
console.log(results4);
assertArraysEqual(results4, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);