const getTotalIsles = function (grid) {


  // write your code here
  let res = 0;
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 'L') {
        res++;
        dfs(i, j, n, m);
      }
    }
  }

  function dfs(i, j, n, m) {
    if (grid[i][j] === 'L') grid[i][j] = 'W';
    else return;

    if (i < n - 1) dfs(i + 1, j, n, m);
    if (j < m - 1) dfs(i, j + 1, n, m);
    if (i > 0 && i < n) dfs(i - 1, j, n, m);
    if (j > 0 && j < m) dfs(i, j - 1, n, m);
  }

  return res;
};

module.exports = getTotalIsles;