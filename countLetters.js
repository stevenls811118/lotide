const countLetters = function(str) {
  let noSpace = str.replace(/ /g, '');
  let array = noSpace.split('');
  let result = {};

  for (let item of array) {
    if (Object.keys(result).includes(item)) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
};

module.exports = countLetters;
