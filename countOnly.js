// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  
  let countList = [];
  let countResult = [];
  let count = 0;
  let result = {};

  for (let item in itemsToCount) { // Loop through the itemstoCount
    if (itemsToCount[item]) { // Decide which key need to be add to countList array
      countList.push(item);
    }
  }

  // Create countResult array by loop through allitems array to match the items in countList
  for (let i = 0; i < countList.length; i++) {
    count = 0;
    for (let j = 0; j < allItems.length; j++) {
      if (countList[i] === allItems[j]) {
        count++;
      }
    }
    countResult.push(count);
  }
  
  // Remove 0 count items from countList and countResult
  for (let r = 0; r < countResult.length; r++) {
    if (countResult[r] === 0) {
      countResult.splice(r, 1);
      countList.splice(r, 1);
    }
  }

  // Create result object by pair countList and countResult items
  for (let a = 0; a < countList.length; a++) {
    result[countList[a]] = countResult[a];
  }

  return result;
};

module.exports = countOnly;