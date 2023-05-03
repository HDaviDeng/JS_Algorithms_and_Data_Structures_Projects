/**
 * One of the simplest and most widely known ciphers is a Ceasar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A <-> N, B <-> O and so on.
 * 
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * 
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
    let decoded = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 13) % 26) + 65;
        }
        decoded += String.fromCharCode(charCode);
    }
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");

/**
 * This function iterates through each character in the input string, checks if it is an uppercase alphabetic character (ASCII code between 65 and 90), and then applies the ROT13 shift of 13 places. If the character is not an uppercase alphabetic character, it is simply added to the decoded string as is.

To apply the ROT13 shift, we first subtract 65 from the character code to convert it to a zero-based index, then add 13 to shift it, and finally use the modulus operator to wrap it around if it goes beyond the end of the alphabet. Finally, we add 65 back to convert it back to an ASCII code.
 */