/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * 
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * 
 * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
 * 
 * We will pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
 * 
 * We will also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */ 

function palindrome(str) {
  //Convert the string to lowercase and remove all non-alphanumeric characters
  str = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
  //Check if the string is equal to its reverse
    return str === str.split("").reverse().join("");
  }
  
  palindrome("eye");

  /**
   * This function works in a similar way to the Python version. It converts the input string to lowercase and removes all non-alphanumeric characters using a regular expression. Then, it checks whether the resulting string is equal to its reverse by splitting the string into an array of characters, reversing the array, and then joining it back into a string.
   */