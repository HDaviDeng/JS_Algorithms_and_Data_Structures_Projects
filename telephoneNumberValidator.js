/**
 * Return true if the passed string looks like a valid US phone number.
 * 
 * The user may fill out the form field any way they choose as long as it has the format of a valid US nunber. The following are examples of valid formats for US nunmbers (refer to the tests below for other variants):
 * 
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US ohone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
 */

function telephoneCheck(str) {
    // Define a regular expression pattern for valid US phone numbers
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return pattern.test(str);
  }
  
  telephoneCheck("555-555-5555");

  /**
   * This function uses a regular expression to define a pattern for valid US phone numbers. The pattern consists of:

^(1\s?)?: an optional country code of 1, followed by an optional space.
(\(\d{3}\)|\d{3}): either a three-digit area code in parentheses or just three digits.
[-\s]?: an optional separator of either a hyphen or a space.
\d{3}: three digits for the phone number prefix.
[-\s]?: another optional separator.
\d{4}$: four digits for the phone number suffix.

The test() method of the regular expression object is then called on the input string to see if it matches the pattern. If it does, the function returns true. Otherwise, it returns false.

   */