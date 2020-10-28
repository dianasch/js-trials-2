"use strict";


function wordsInCommon(words1, words2) {
  // Return a list of unique words that appear in `words1` and `words2`

  // Set variable words1Set to a set of words1
  const words1Set = new Set(words1);

  // Set variable words2Set to a set of words2
  const words2Set = new Set(words2);

  // Set variable result to a new empty set
  const result = new Set();

  // Loop through each word in words1Set
  for (const word of words1Set) {

    // Determine if that word is in words2Set
    if (words2Set.has(word)) {

      // If so, add word to result set
      result.add(word);
    }
  }

  // Return result as an array
  return Array.from(result);

}


function kidsGame(names) {
  // Replace this with your code
}
