function confirmEnding(str, target) {
    let finalLetter="";
    for (let i = 0; i < str.length; i++) {
      if (i >= (str.length - target.length)) {
        finalLetter+=str[i];
      }
  
    }
  
    return finalLetter===target;
  }
  
  confirmEnding("Bastian", "n");