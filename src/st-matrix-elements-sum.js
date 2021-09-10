import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (i == 0) {
        count += matrix[i][k];
        continue;
      } else if (matrix[i - 1][k] != 0) {
        count += matrix[i][k];
      }
    }
  }
  return count;
}
