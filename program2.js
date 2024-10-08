const decodeTheRing = function (s, p) {

    // write your code here
    const n = s.length;
    const m = p.length;
    const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let i = 1;  i <= m; i++) {
      if (p[i - 1] === '*') {
        dp[0][i] = dp[0][i - 2];
      }
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p[j - 1] === '*') {
          dp[i][j] = dp[i][j - 2];
          
          if (p[j - 2] == s[i - 1] || p[j - 2] === '?') {
            dp[i][j] = dp[i][j] || dp[i - 1][j];
          }
        }
      }
    }

    return dp[n][m];
  };
  
  module.exports = decodeTheRing;