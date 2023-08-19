function convertToRoman(num) {
    const romanNumerals = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
    };
  
    let result = "";
  
    // Sort the keys in descending order
    const sortedValues = Object.keys(romanNumerals)
      .map(Number)
      .sort((a, b) => b - a);
  
    for (let value of sortedValues) {
      while (num >= value) {
        result += romanNumerals[value];
        num -= value;
      }
    }
  
    return result;
  }
  
  console.log(convertToRoman(36));