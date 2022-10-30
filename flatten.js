const flatten = function(array) {

  let result = [];
  for (let i in array) {
    // If it is nest array, call flatten function recursively
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;