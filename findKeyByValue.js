const findKeyByValue = function(obj, str) {
  // Loop through each key value in obj
  for (let key in obj) {
    if (obj[key] === str) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;