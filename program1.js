const getTotalIsles = function (grid) {


  // write your code here
  let res = 0;

  function dfs(i, j) {
    if (grid[i][j] === '1') grid[i][j] = '0';
    else return;

    if (i < grid.length)
  }

};

module.exports = getTotalIsles;