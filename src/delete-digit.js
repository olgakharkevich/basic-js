const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  const result = [];
  const arr = [...String(n)]
  arr.forEach((el, ind) => {
    const copyArr = [...arr]
    copyArr.splice(ind, 1);
    result.push(+copyArr.join(''));
  })
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
