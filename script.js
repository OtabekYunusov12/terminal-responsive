function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    let freqCounter = {};
    for (let char of str1) {
      freqCounter[char] = (freqCounter[char] || 0) + 1;
      console.log(freqCounter);
    }
    for (let char of str2) {
      if (!freqCounter[char]) return false;
      freqCounter[char] -= 1;
      console.log(freqCounter);
    }
  
    return true;
  }
  
  isAnagram('David', 'divad');
  isAnagram('Cake', 'Pake');