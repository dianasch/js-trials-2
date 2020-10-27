"use strict";


// 1. printIndices
function printIndices(items) {
  // Print each item in the array, followed by its index.

  // Loop through each index in the array
  for (const i in items) {

    // Print item at index i and i
    console.log(`${items[i]} ${i}`)
  }

}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Print an array of every other item in `items`

  // Creates an empty list
  const result = [];

  // Loop through each index in the array
  for (const i in items) {
    
    // Checks if i is even
    if (i % 2 === 0) {

      // If so, append the item at index i
      result.push(items[i]);    
    }

  }
  // prints the results
  console.log(result)

}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Print an array of the `n` smallest integers in `items`.


  // function compare(a, b) {
  //   return a - b;
  // }

  items.sort((a, b) => a - b);

  items.slice(0, (n - 1));

  items.reverse();
  
  console.log(items);

}