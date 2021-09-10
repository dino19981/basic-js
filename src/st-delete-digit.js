import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n);
  let arr = n.split('');
  arr.splice(n.indexOf(Math.min.apply(null, arr)), 1);
  return +arr.join('');
}
