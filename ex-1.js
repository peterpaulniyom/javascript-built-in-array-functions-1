let words = ["hello", "world"];

function getWordLengths(words) {
  let result = words.map(function(word){return word.length;});
  return result;

}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
