let words = ["apple", "cat", "dog", "elephant"];

const moreThanFive = (words) => words.length >= 5;

function get5CharWords(words) {
  let result = [];
  result = words.filter(moreThanFive);
  return result;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
