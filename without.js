const without = function(firstArray, secondArray) {
  let temp = firstArray.slice();

  console.log(temp);
  for (let i = 0; i < secondArray.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (secondArray.includes(temp[j])) {
        temp.splice(temp.indexOf(secondArray[i]), 1);
        console.log(temp);
        j--;
      }
    }
  }
  return temp;
};

module.exports = without;