"use strict";


// 1. isHometown

// Given a `town`, return `true` if `town` is 'New York City'.
// Arguments: 
//     town(str): A town

// Returns:
//     bool: true if `town` is `New York City `

const isHometown = town => town === 'New York City';


// 2. getFullName

// Given `first_name` and `last_name`, return a full name.

// Arguments:
//     first_name (str): A first name
//     last_name (str): A last name

// Returns:
//     str: A full name

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

// 3. calculateTotal

function calculateTotal (basePrice, state, tax = 0.05) {
// Return the total price of an item, figuring in state taxes and fees.

// Arguments:
//     base_price (float): Base price of an item
//     state (str): Two-letter abbreviation of a U.S. state
//     tax (float): Tax rate. Defaults to 0.05

// Returns:
//     number: The total price of an item

  // Set variable subtotal as basePrice with tax added
  const subtotal = basePrice * (1 + tax);

  // Set variable fee to 0
  let fee = 0;

  // Determine if state is `CA`
  if (state === 'CA') {

    // If so, fee is 0.03 * subtotal
    fee = 0.03 * subtotal;

  // Determine if state is `PA`
  } else if (state === 'PA') {

    // If so, fee is 2
    fee = 2;

  // Determine if state is `MA`
  } else if (state === 'MA') {

      // If so and basePrice is less than or equal to 100, fee is 1
      if (basePrice <= 100) {
        fee = 1;
      
      // Otherwise, fee is 3
      } else {
        fee = 3;
      }
    }

  // Return subtotal plus fee
  return (subtotal + fee);
}
