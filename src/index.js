
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || !matrix.length) {
    return [];
  }
  return matrix.reduce((previous, current, index) => index % 2 === 0 ? previous.concat(current) : previous.concat(current.reverse()), [])
}
