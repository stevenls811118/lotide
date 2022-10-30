const letterPositions = function(sentence) {
  const results = {};
  let array = sentence.split('');
  
  
  for (let item in array) {
    // Decide if the letter shows up before, if shows up before, push the index to the exsiting array. if not, create an array with that index
    if (Object.keys(results).includes(array[item])) {
      results[array[item]].push(Number(item));
    } else {
      results[array[item]] = [Number(item)];
    }
  }

  // Remove the space key and value from result object
  delete results[' '];
  
  return results;
};

module.exports = letterPositions;