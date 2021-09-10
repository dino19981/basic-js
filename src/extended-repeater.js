import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  let result = [String(str)];

  if (options.additionRepeatTimes && String(options.addition)) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (options.additionRepeatTimes > 1) {
        if (i + 1 == options.additionRepeatTimes) {
          result.push(String(options.addition));
        } else {
          result.push(String(options.addition) + options.additionSeparator);
        }
      } else {
        result.push(options.addition);
      }
    }
  } else if (options.addition) {
    result.push(String(options.addition));
  }
  console.log(result);
  if (options.repeatTimes > 1) {
    result.push(String(options.separator));
  }

  result = result
    .join('')
    .repeat(options.repeatTimes || 1)
    .split('');
  if (options.repeatTimes > 1) {
    result.splice(
      result.length - options.separator.length,
      options.separator.length
    );
  }
  console.log(options.additionSeparator.length, options.separator.length);
  return result.join('');
}
