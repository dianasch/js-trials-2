"use strict";


// 1. countWords
function countWords(phrase) {
  // Return an object of each word and the no. of times it appears.

  // Set variable wordCounts as an empty object
  const wordCounts = {};

  // Set variable phraseSplit as an array of the phrase split by words
  const phraseSplit = phrase.split(' ');

  // Loop through each word in phraseSplit array
  for (const word of phraseSplit) {

    // Determine if word is in wordCounts
    if (wordCounts.hasOwnProperty(word)) {

      // If so, increment value stored at word by 1
      wordCounts[word] += 1;

      // Otherwise, set value stored at word to 1
    } else {
      wordCounts[word] = 1;
    }
  }

  // Return wordCounts object
  return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
