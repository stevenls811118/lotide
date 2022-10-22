const findKeyByValue = function(obj, str) {
  if (Object.values(obj).includes(str)) {
    for (let key in obj) {
      if (obj[key] === str) {
        return key;
      }
    }
  } else {
    return undefined;
  }
};

module.exports = findKeyByValue;