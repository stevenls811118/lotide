const findKey = function(obj, callback) {
  // Loop through the key for obj
  for (let key of Object.keys(obj)) {
    // if callback of the obj value is true, return the key
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;