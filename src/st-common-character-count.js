import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let firstStr = s1.split('');
  let secondStr = s2.split('');
  let obj = {};
  let count = 0;

  firstStr.forEach((item) => (obj[item] = (obj[item] || 0) + 1));
  for (let item of secondStr) {
    if (obj[item] >= 1) {
      count++;
      obj[item] = obj[item] - 1;
    }
  }
  return count;
}
