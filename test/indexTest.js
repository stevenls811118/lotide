const _ = require('../index');

_.assertArraysEqual(_.flatten([[1, [2, [[3], [4]], [5]]], [6]]), [1, 2, 3, 4, 5, 6]);

_.assertArraysEqual([[1], [2, [3]]], [[1], [2, [3]]]); // => true


_.assertEqual(_.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
_.assertObjectsEqual(ab, ba);