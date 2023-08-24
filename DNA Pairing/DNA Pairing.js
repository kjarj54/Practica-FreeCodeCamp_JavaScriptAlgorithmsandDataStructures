function pairElement(str) {
    const pairings = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    };
  
    const result = [];
    
    for (let char of str) {
      result.push([char, pairings[char]]);
    }
    
    return result;
  }
  
  pairElement("GCG");