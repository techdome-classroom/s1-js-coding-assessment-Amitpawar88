const getTotalIsles = function (grid) {


  // write your code here
  let res = 0;
  const n = grid.length;
  const m = grid[0].length;

  for (int i = 0; i < )

  function dfs(i, j) {
    if (grid[i][j] === '1') grid[i][j] = '0';
    else return;

    if (i < n - 1) dfs(i + 1, j);
    if (j < m - 1) dfs(i, j + 1);
    if (i > 0 && i < n) dfs(i - 1, j);
    if (j > 0 && j < m) dfs(i, j - 1);
  }

};

module.exports = getTotalIsles;