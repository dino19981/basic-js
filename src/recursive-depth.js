import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, count = 1) {
    if (!arr.filter((i) => Array.isArray(i)).length) return count;
    else
      return arr.length
        ? this.calculateDepth(
            arr.flat().filter((i) => Array.isArray(i)),
            count + 1
          )
        : count;
  }
}
