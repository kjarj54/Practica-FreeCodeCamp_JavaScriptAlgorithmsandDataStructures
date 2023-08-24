function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if (vowels.includes(str[0])) {
      return str + 'way';
    } else {
      let consonantCluster = '';
      let index = 0;
      
      while (index < str.length && !vowels.includes(str[index])) {
        consonantCluster += str[index];
        index++;
      }
      
      return str.slice(index) + consonantCluster + 'ay';
    }
  }
  
  translatePigLatin("consonant");