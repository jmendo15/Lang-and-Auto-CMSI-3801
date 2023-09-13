function isPermutationOfPalindrome(str) {
    // Convert to lowercase and remove spaces
    str = str.toLowerCase().replace(/\s/g, '');
  
    const charCount = new Map();
  
    // Count the frequency of each character
    for (const char of str) {
      if (char.match(/[a-z]/)) {
        if (charCount.has(char)) {
          charCount.set(char, charCount.get(char) + 1);
        } else {
          charCount.set(char, 1);
        }
      }
    }
  
    let oddCount = 0;
  
    // Check the character frequencies
    for (const count of charCount.values()) {
      if (count % 2 !== 0) {
        oddCount++;
        if (oddCount > 1) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Example usage:
  const inputStr = "T a c t Coa";
  const result = isPermutationOfPalindrome(inputStr);
  console.log(result); // Output: true
  