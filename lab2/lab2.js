// mocha.setup('bdd');
// // Make assert global so that it is available to all test functions.
// window.assert = chai.assert;
/**
 * Calculates the power of x raised to n.
 * @param {number} x The base number.
 * @param {number} n The exponent (must be an integer).
 * @returns {number} x raised to the power of n.
 */
function pow(x, n) {
    if (n === 0) {
      return 1;
    } else if (n > 0) {
      return x * pow(x, n - 1);
    } else {
      return 1 / pow(x, -n);
    }
  }
  
  /**
   * Calculates the sum of numbers from 1 to n (inclusive).
   * @param {number} n A natural number.
   * @returns {number} The sum of numbers from 1 to n.
   */
  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  /**
   * Checks if a year is a leap year.
   * @param {number} year The year to check.
   * @returns {boolean} True if the year is a leap year, false otherwise.
   */
  function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }
  
  /**
   * Calculates the factorial of a number n using recursion.
   * @param {number} n A non-negative integer.
   * @returns {BigInt} The factorial of n.
   */
  function factorial(n) {
    if (n === 0) {
      return 1n;
    } else {
      return BigInt(n) * factorial(n - 1);
    }
  }
  
  /**
   * Calculates the n-th Fibonacci number.
   * @param {number} n A non-negative integer.
   * @returns {BigInt} The n-th Fibonacci number.
   */
  function fib(n) {
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++) {
      let temp = a;
      a = b;
      b = temp + b;
    }
    return a;
  }
  
  /**
   * Creates a comparison function that compares its argument to a given value x.
   * @param {number} x The value to compare against.
   * @returns {function(number): (boolean | null)} A function that compares its argument to x.
   */
  function compare(x) {
    return function(y) {
      if (y > x) {
        return true;
      } else if (y < x) {
        return false;
      } else {
        return null;
      }
    };
  }
  
  /**
   * Calculates the sum of all its arguments.
   * @param {...number} numbers The numbers to sum.
   * @returns {number} The sum of all arguments.
   */
  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  /**
   * Adds a symbolic property "blackSpot" with the value `true` to an object.
   * @param {object} obj The object to add the property to.
   * @returns {object} The object with the added "blackSpot" property.
   */
  function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
  }