
/**
 * @param {number} x 
 * @param {number} n 
 * @returns {number} 
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
   * @param {number} n 
   * @returns {number} 
   */
  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  /**
   * @param {number} year 
   * @returns {boolean} 
   */
  function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }
  
  /**
   * @param {number} n 
   * @returns {BigInt} 
   */
  function factorial(n) {
    if (n === 0) {
      return 1n;
    } else {
      return BigInt(n) * factorial(n - 1);
    }
  }
  
  /**
   * @param {number} n 
   * @returns {BigInt} 
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
   * @param {number} x 
   * @returns {function(number): (boolean | null)} 
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
   * @param {...number} numbers 
   * @returns {number} 
   */
  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  /**
   * @param {object} obj 
   * @returns {object} 
   */
  function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
  }