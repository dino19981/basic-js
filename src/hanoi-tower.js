import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 3;
  let seconds = 0;
  for (let i = 2; i < disksNumber; i++) {
    turns = turns * 2 + 1;
  }
  seconds = Math.floor(turns / (turnsSpeed / 3600));
  return { turns: turns, seconds: seconds };
}
