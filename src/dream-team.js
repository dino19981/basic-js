import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *npm run test
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  members.forEach((name) => {
    if (typeof name == 'string') {
      for (let i = 0; i < name.length; i++) {
        if (name.substr(i, 1) == ' ') {
          continue;
        } else {
          result.push(name.substr(i, 1).toUpperCase());
          break;
        }
      }
    }
  });
  return result.sort().join('');
}
