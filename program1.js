const getTotalIsles = function (grid) {


  // write your code here
  let res = 0;
  const n = grid.length;
  const m = grid[0].length;

  function dfs(i, j) {
    if (grid[i][j] === '1') grid[i][j] = '0';
    else return;

    if (i < n - 1) dfs(i + 1, j);
    if (j < )
  }

};

module.exports = getTotalIsles;