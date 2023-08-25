function binaryAgent(str) {
    const binaryCodes = str.split(' '); // Split the binary string into an array of binary codes
    let translatedSentence = '';
  
    binaryCodes.forEach(binaryCode => {
      // Convert binary code to decimal (base 10) integer
      const decimalValue = parseInt(binaryCode, 2);
      
      // Convert decimal value to ASCII character and append to the translated sentence
      translatedSentence += String.fromCharCode(decimalValue);
    });
  
    return translatedSentence;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");