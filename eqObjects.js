const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let boolean = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      // if the values are arrays, use eqArray funtion to compare
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      // if the values are object, use eqObjects funtion recursively to compare
      } else if (typeof object1[key] === "object" && typeof object1[key] !== null && typeof object2[key] === "object" && typeof object2[key] !== null) { 
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