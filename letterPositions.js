const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // let noSpace = sentence.replace(/ /g, '');
  let array = sentence.split('');

  for (let item in array) {
    if (Object.keys(results).includes(array[item])) {
      results[array[item]].push(Number(item));
    } else {
      results[array[item]] = [Number(item)];
    }
  }

  delete results[' '];
  
  return results;
};

module.exports = letterPositions;