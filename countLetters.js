const countLetters = function(str) {
  let noSpace = str.replace(/ /g, ''); // Remove spaces from string
  let array = noSpace.split('');
  let result = {};

  for (let item of array) {
    if (Object.keys(result).includes(item)) { // Decide if letter showed up
      result[item]++;
    } else {
      result[item] = 1; // Create the key with the letter and assign 1 to it
    }
  }

  return result;
};

module.exports = countLetters;
