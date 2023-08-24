function sumAll(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    
    let sum = 0;
    
    // Iterate through the range and add each number to the sum
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    
    return sum;
  }
  
  sumAll([1, 4]);