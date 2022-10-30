const takeUntil = function(array, callback) {
  let result = [];
  // Loop through original array, if item by callback function is false, push that item to new array, otherwise return the new array
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;