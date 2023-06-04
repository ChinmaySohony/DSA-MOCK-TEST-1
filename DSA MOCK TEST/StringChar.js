function firstUniqChar(s) {
  const charFrequency = {};

  // Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charFrequency[char] === 1) {
      return i;
    }
  }

  return -1; // No non-repeating character found
}
