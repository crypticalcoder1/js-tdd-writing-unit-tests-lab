/**
 * Checks if a given string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if str is a palindrome, false otherwise.
 * @throws {Error} - Throws an error if str is not a string or contains non-alphabetic characters.
 */
function isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Return false for empty string as per test case requirements
    if (str === '') {
      return false;
    }
  
    if (!/^[A-Za-z]+$/.test(str)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    // Convert string to lowercase for case-insensitive comparison
    const cleanedStr = str.toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  
  module.exports = { isPalindrome };
  