function checkPositive(arr) {
    // Use the some method to check if any element is positive
    return arr.some(function(currentValue) {
      return currentValue > 0;
    });
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5])); // Output: true