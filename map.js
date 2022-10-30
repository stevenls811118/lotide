let map = function(array, callback) {
  const results = [];
  // Loop through array, for each item push the callback result to create new array
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;