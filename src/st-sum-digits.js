import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(num) {
  let arr = String(num).split('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let ar = String(num).split('');
    for (let k = 0; k < ar.length; k++) {
      sum += +ar[k];
    }
    if (sum < 10) {
      return sum;
    }
    num = sum;
    sum = 0;
  }
}
