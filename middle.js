const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    if (array.length % 2 === 1) {
      return [array[Math.floor(array.length / 2)]];
    } else {
      return array.slice(array.length / 2 - 1, array.length / 2 + 1);
    }
  }
};

module.exports = middle;

