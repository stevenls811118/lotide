// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  
  let countList = [];
  let countResult = [];
  let count = 0;
  let result = {};

  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      countList.push(item);
    }
  }

  for (let i = 0; i < countList.length; i++) {
    count = 0;
    for (let j = 0; j < allItems.length; j++) {
      if (countList[i] === allItems[j]) {
        count++;
      }
    }
    countResult.push(count);
  }
  
  for (let r = 0; r < countResult.length; r++) {
    if (countResult[r] === 0) {
      countResult.splice(r, 1);
      countList.splice(r, 1);
    }
  }

  for (let a = 0; a < countList.length; a++) {
    result[countList[a]] = countResult[a];
  }

  return result;
};

module.exports = countOnly;