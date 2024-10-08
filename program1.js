const getTotalIsles = function (grid) {


  // write your code here
  let res = 0;
  const n = grid.length - 1;
  const m = grid[0].length;

  function dfs(i, j) {
    if (grid[i][j] === '1') grid[i][j] = '0';
    else return;

    if (i < grid.length)
  }

};

module.exports = getTotalIsles;