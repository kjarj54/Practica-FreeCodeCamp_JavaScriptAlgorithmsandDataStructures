function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
      const arr = rangeOfNumbers(startNum + 1, endNum);
      arr.unshift(startNum);
      return arr;
    } else {
      return [];
    }
  
  };
  
  console.log(rangeOfNumbers(1, 2));