// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('should return true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('should return true for a mixed case palindrome', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('should throw an error for input with non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar123')).toThrow('Input must contain only alphabetic characters');
  });

  test('should throw an error if input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});
