import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  if (typeof arr[0] == 'object') {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) || typeof arr[i] == 'object') {
      result.push(arr[i]);
      continue;
    }

    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        console.log(9);
        if (arr[i - 2] == '--discard-next') {
          console.log(1);
          break;
        } else {
          result.splice(i - 1, 1);
          break;
        }
      case '--double-next':
        if (arr[i + 1]) {
          result.push(arr[i + 1]);
          break;
        } else {
          break;
        }

      case '--double-prev':
        if (arr[i - 2] == '--discard-next') {
          break;
        } else if (arr[i - 1]) {
          result.push(arr[i - 1]);
          break;
        } else {
          break;
        }
      case 'undefined':
        break;
      default:
        result.push(arr[i]);
    }
  }
  if (result.length == 0) {
    return arr;
  }
  return result;
}
