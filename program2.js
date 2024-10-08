const decodeTheRing = function (s, p) {

    // write your code here
    const n = s.length;
    const m = p.length;
    const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let i = 1;  i <= m; i++) {
      if (p[i - 1] === '*') {
        dp[0][i] = dp[0][j - 2];
      }
    }

    for 

  };
  
  module.exports = decodeTheRing;