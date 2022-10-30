const without = function(firstArray, secondArray) {
  // Create temp array to avoid change the orignal array
  let temp = firstArray.slice();

  // Loop through temp array and secondArray to find the item in temp array that is not show up in secondArray
  for (let i = 0; i < secondArray.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      // If temp array item in secondArray
      if (secondArray.includes(temp[j])) {
        // Remove the item shows up in secondArray from temp array, and index--
        temp.splice(temp.indexOf(secondArray[i]), 1);
        j--;
      }
    }
  }
  return temp;
};

module.exports = without;