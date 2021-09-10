import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let items = [];
  let newArr = arr.map((item) => {
    if (item !== -1) {
      items.push(item);
      return 'undefined';
    }
    return item;
  });
  let ind = 0;
  items.sort((a, b) => a - b);
  return newArr.map((item) => {
    if (item == 'undefined') {
      return items[ind++];
    }
    return item;
  });
}
