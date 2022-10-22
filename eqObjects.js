const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let boolean = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === "object" && typeof object1[key] !== null && Array.isArray(object1[key]) === false && typeof object2[key] === "object" && typeof object2[key] !== null && Array.isArray(object2[key]) === false) {
        boolean = eqObjects(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return boolean;
};

module.exports = eqObjects;