const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    // Decide array length is odd or even
    if (array.length % 2 === 1) {
      // If the length is odd, return a new array with middle item from original array
      return [array[Math.floor(array.length / 2)]];
    } else {
      // if the length is even, return the middle two tiems from original array
      return array.slice(array.length / 2 - 1, array.length / 2 + 1);
    }
  }
};

module.exports = middle;

