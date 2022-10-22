const eqObjects = require("../eqObjects");


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));

console.log(eqObjects({ a: { y: {x: {c: {}, d:[5, [4, [], 8]]}}, z: 1 }, b: 2 }, { a: { y: {x: {c: {}, d:[5, [4, [], 8]]}}, z: 1 }, b: 2 }));

console.log(eqObjects({ a: [4, [[5], 12]]}, { a: [4, [[5], 12]]}));
