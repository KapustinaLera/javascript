/**
 * @param {number} num 
 * @returns {number} 
 */
export function getDecimal(num) {
    const intPart = Math.trunc(Math.abs(num));
    let decimal = Math.abs(num) - intPart;
  
    decimal = Math.round(decimal * 100) / 100; 
  
    if (num < 0) {
      decimal = 1 - decimal; 
    }
  
    return decimal;
  }
  
  /**
   * @param {string} url 
   * @returns {string} 
   */
  export function normalizeUrl(url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url.replace(/^http:\/\//, 'https://');
    } else {
      return 'https://' + url;
    }
  }
  
  /**
   * @param {string} str 
   * @returns {boolean} 
   */
  export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  /**
   * @param {string} str 
   * @param {number} maxlength 
   * @returns {string} 
   */
  export function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + '\u2026'; 
    } else {
      return str;
    }
  }
  
  /**
   * @param {string} str 
   * @returns {string} 
   */
  export function camelize(str) {
    return str
      .split('-')
      .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
      .join('');
  }
  
  /**
   * @param {string} str 
   * @returns {string}
   */
  function ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
  }
  



  import { fib } from './lab2.js'; // Adjust the path if necessary

  /**
   * @param {number} n
   * @returns {BigInt[]}
   */
  export function fibs(n) { // Renamed to fibs
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(fib(i)); // Use fib(i) from lab2.js
    }
    return result;
  }

  // import { fib } from 'lab2/lab2.js'; 
  // /**
  //  * @param {number} n 
  //  * @returns {BigInt[]} 
  //  */
  // export function fib(n) {
  //   const result = [];

  //   for (let i = 0; i < n; i++) {
  //     result.push(fib(i)); // Use fib(i) instead of manual calculation
  //   }
  //   return result;
  // }

  //   let a = 0n, b = 1n;
  //   for (let i = 0; i < n; i++) {
  //     result.push(a);
  //     let temp = a;
  //     a = b;
  //     b = temp + b;
  //   }
  //   return result;
  // }
  
  /**

   * @param {number[]} arr 
   * @returns {number[]}
   */
  export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a); 
  }
  
  /**
   * @param {any[]} arr 
   * @returns {any[]} 
   */
  export function unique(arr) {
    return [...new Set(arr)];
  }