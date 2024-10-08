const decodeTheRing = function (s, p) {

    // write your code here
    const n = s.length;
  const m = p.length;

  // DP table initialization
  const dp = Array(n + 1).fill(false).map(() => Array(m + 1).fill(false));

  // Base case: empty pattern matches empty message
  dp[0][0] = true;

  // If the pattern contains '*' at the start, it can match an empty string
  // **Updated: Now handles '*' matching zero characters at the beginning**
  for (let j = 1; j <= m; j++) { 
    if (p[j - 1] === '*') {  
      dp[0][j] = dp[0][j - 1];  
    }
  }

  // Fill the dp table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // **Updated: Handling '?' character to match exactly one character**
      if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {  
        dp[i][j] = dp[i - 1][j - 1];  
      } 
      // **Updated: Handling '*' to match zero or more characters**
      else if (p[j - 1] === '*') {  
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];  
      }
    }
  }
  
  return dp[n][m];
};
  
  module.exports = decodeTheRing;